

const router = require("express").Router()

const user = require("../controller/userController")


router.post("/user/add",user.addUser);

router.get("/user/getAllUsers",user.getAllUsers);

router.post("/user/update/:id",user.updateUser);

router.delete("/user/delete/:id",user.deleteUser);

router.get("/user/getOneUser/:id",user.getOneUser);

module.exports = router;
