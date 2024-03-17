/**
 * @swagger
 * components:
 *   schemas:
 *     test:
 *       type: object
 *       properties:
 *         test_id:
 *           type: integer
 *           format: int64
 *         test_name:
 *           type: string
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *     ResultSuccess:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           default: 200
 *         message:
 *           type: string
 *           default: '登陆成功'
 *     ResultFailed:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           default: 404
 *         message:
 *           type: string
 *           default: '用户名或密码错误'
 */
