import express from "express"

const router = express.Router()



router.get("/", (req, res)=>{
    res.json([{}])
});
router.post("/", (req, res)=>{
    res.json([{}])
});
router.get("/search", (req, res)=>{
    const {q} = req.query
    res.json([])
})




export default router;


















