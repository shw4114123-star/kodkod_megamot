import express from "express"

const tasks = [
  { id: 1, title: "Buy milk and bread" },
  { id: 2, title: "Send email to the manager" },
  { id: 3, title: "Evening workout at the gym" },
  { id: 4, title: "Finish the React project" },
  { id: 5, title: "Book a dentist appointment" }
];

const router = express.Router()


router.get("/", (req, res) => {
  return res.json(tasks)
})

router.post("/", (req, res) => {
  const { title } = req.query
  if (!title) {
    res.status(400)
    return res.end("wrong url")
  }
  tasks.push({ id: 6, title })
  res.json(tasks)
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  const findById = tasks.find(task => task.id === +id)
  if (!findById) {
    res.status(404)
    return res.end("not found")
  }
  return res.json(findById)
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  const deleteById = tasks.filter(task => task.id !== +id)
  if (deleteById.length === tasks.length) {
    res.status(404)
    return res.end("not found")
  } 
  res.status(204)
  return res.end("momo")
})

export default router