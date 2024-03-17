var express = require("express");
var router = express.Router();

/**
 * @swagger
 * /test:
 *   get:
 *     tags:
 *       - test
 *     summary: 这是总结
 *     description: 这是描述
 *     parameters:
 *       - name: queryString
 *         in: query
 *         description: 这个是queryString参数的描述
 *         required: true
 *         schema:
 *           type: string
 *           default: test1
 *           enum:
 *             - test1
 *             - test2
 *             - test3
 *     responses:
 *       '200':
 *         description: 操作成功
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/test'
 *       '400':
 *         description: 操作失败
 */
router.get("/?queryString=test1", function (req, res) {
  res.json({
    test_id: 111,
    test_name: "aaa",
  });
});

module.exports = router;
