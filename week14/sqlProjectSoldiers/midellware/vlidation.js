
const techUnits = ["golani", "givati", "paratroopers", "nahal", "kfir"]
const soldierRanks = ["private", "corporal", "sergeant", "lieutenant", "captain"];

export const checkId = async (req, res, next) => {
    const { id } = req.params
    if (isNaN(id)) return res.status(400).json({ message: "params must be a number" })
    next()
}


export const checkBody = async (req, res, next) => {
    const { name, soldier_rank, unit, age } = req.body
    if (isNaN(age) || age < 18 || age > 50) {
        return res.status(400).json({ message: "age must be a number or greater than 18 or smaller than 50" });
    }
    if (typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({ message: "name must be a string and not ampty" });
    }
    if (!techUnits.includes(unit)) {
        return res.status(400).json({ message: "unit must be a string and not ampty and one from the list" });
    }
    if (!soldierRanks.includes(soldier_rank)) {
        return res.status(400).json({ message: "soldier_rank must be a string and not ampty and one from the list" });
    }
    next()
}


export const checkStatus = async (req, res, next) => {
    const { service_status } = req.body
    if (service_status !== "active" && service_status !== "not_active") {
        return res.status(400).json({ message: "service_status must be or active or not_active and not be empty" })
    }
    next()
}