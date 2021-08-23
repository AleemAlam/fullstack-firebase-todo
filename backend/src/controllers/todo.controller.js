const { Router } = require("express");
const router = Router();
const Todo = require("../model/todo.model");
const firebase = require("firebase");

router.get("/", async (req, res) => {
  try {
    const snapshot = await Todo.get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {
      ...req.body,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await Todo.add(data);
    return res.status(201).json({ message: "todo added" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await Todo.doc(req.params.id).update(req.body);
    return res.status(200).json({ message: "updated" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.doc(req.params.id).delete();
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

module.exports = router;
