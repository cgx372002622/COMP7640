var express = require("express");
var router = express.Router();
const { connectToDB, ObjectId } = require("../utils/db");

/**
 * @swagger
 * /admin/login:
 *   post:
 *     tags:
 *       - admin
 *     summary: 登录
 *     description: username、password明文传输
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: 登陆成功
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResultSuccess'
 *       '404':
 *         description: 登陆失败
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResultFailed'
 */
router.post("/login", async function (req, res) {
  const db = await connectToDB();
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      throw new Error("用户名或密码不能为空");
    }
    const result = await db
      .collection("xxxxxx")
      .findOne({ username: username });
    if (!result) {
      throw new Error("用户不存在");
    }
    if (result.password != password) {
      throw new Error("密码错误");
    }
    res.status(200).json({
      code: 200,
      message: "登陆成功",
    });
  } catch (error) {
    res.status(404).json({
      code: 404,
      message: error.message,
    });
  } finally {
    await db.client.close();
  }
});

module.exports = router;
