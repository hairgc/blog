/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2017-06-25 15:52:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) DEFAULT '' COMMENT '类别名称',
  `desc` int(2) DEFAULT NULL,
  `post_size` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '种类一', '0', '0');
INSERT INTO `category` VALUES ('2', '种类二', '1', '0');
INSERT INTO `category` VALUES ('3', '种类三', '2', '0');
INSERT INTO `category` VALUES ('4', '种类四', '3', '0');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COMMENT '评论内容',
  `comment_time` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '状态：0：已删除，1：已发布，2：优质评论',
  `re_name` varchar(50) DEFAULT NULL COMMENT '回复人',
  `open_id` varchar(255) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk[comment_user]open_id` (`open_id`),
  KEY `fk[comment_post]post_id` (`post_id`),
  CONSTRAINT `fk[comment_post]post_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk[comment_user]open_id` FOREIGN KEY (`open_id`) REFERENCES `user` (`open_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('2', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('3', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('4', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('5', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('6', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('7', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('8', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('9', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('10', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('11', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('12', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('13', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('14', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('15', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('16', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('17', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('18', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('19', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('20', '[reply]qq_33663251[/reply]', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('21', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('22', '这是我的评论', '2017-06-19 19:07:04', '1', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('23', '写的不错哦', '2017-06-13 19:07:32', '2', null, 'FAB56B0377CFE75488B0ACA8AD190C4A', '21');
INSERT INTO `comment` VALUES ('24', '自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己己评论自己自己评论自己自己评论自己自己评论自己', '2017-06-14 19:07:51', '0', null, 'ADCA5196948120F29897B1BD9090A364', '21');
INSERT INTO `comment` VALUES ('25', '12阿萨德那可是打开', '2017-06-19 22:09:36', '1', null, 'ADCA5196948120F29897B1BD9090A364', '19');
INSERT INTO `comment` VALUES ('26', '驱蚊器巍峨群我', '2017-06-19 22:09:52', '1', null, 'ADCA5196948120F29897B1BD9090A364', '19');
INSERT INTO `comment` VALUES ('27', '哈哈哈哈哈12312', '2017-06-19 22:12:05', '1', null, 'ADCA5196948120F29897B1BD9090A364', '19');
INSERT INTO `comment` VALUES ('28', '阿卡黑色的哈萨克接电话', '2017-06-19 22:12:12', '1', null, 'ADCA5196948120F29897B1BD9090A364', '19');
INSERT INTO `comment` VALUES ('29', '12312', '2017-06-21 19:17:53', '0', null, 'ADCA5196948120F29897B1BD9090A364', '2');
INSERT INTO `comment` VALUES ('30', '123123', '2017-06-21 19:17:58', '1', null, 'ADCA5196948120F29897B1BD9090A364', '2');
INSERT INTO `comment` VALUES ('31', '123123123', '2017-06-21 19:18:06', '1', null, 'ADCA5196948120F29897B1BD9090A364', '2');
INSERT INTO `comment` VALUES ('32', '自己回复自己', '2017-06-21 19:18:17', '1', '‭馬輝', 'ADCA5196948120F29897B1BD9090A364', '2');
INSERT INTO `comment` VALUES ('33', 'hahaha', '2017-06-21 20:54:39', '1', '‭馬輝', 'ADCA5196948120F29897B1BD9090A364', '21');

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '权限说明',
  `code` varchar(64) DEFAULT NULL,
  `desc` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES ('1', '添加文章', 'post:add', '1');
INSERT INTO `permission` VALUES ('2', '修改文章', 'post:update', '2');
INSERT INTO `permission` VALUES ('3', '删除文章', 'post:delete', '3');
INSERT INTO `permission` VALUES ('4', '新增评论', 'comment:add', '4');
INSERT INTO `permission` VALUES ('5', '修改评论', 'comment:update', '5');
INSERT INTO `permission` VALUES ('6', '删除评论', 'comment:delete', '6');
INSERT INTO `permission` VALUES ('7', '图片上传', 'picture:upload', '7');
INSERT INTO `permission` VALUES ('8', '文章管理', 'post:manage', '8');
INSERT INTO `permission` VALUES ('9', '用户管理', 'user:manage', '9');
INSERT INTO `permission` VALUES ('10', '评论管理', 'comment:manage', '10');
INSERT INTO `permission` VALUES ('11', '访客记录', 'visitor:manage', '11');

-- ----------------------------
-- Table structure for picture
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `upload_time` datetime DEFAULT NULL COMMENT '上传时间',
  `picture_name` varchar(64) DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL COMMENT '图片url',
  `open_id` varchar(255) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk[picture_user]open_id` (`open_id`),
  KEY `fk[picture_post]post_id` (`post_id`),
  CONSTRAINT `fk[picture_post]post_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk[picture_user]open_id` FOREIGN KEY (`open_id`) REFERENCES `user` (`open_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of picture
-- ----------------------------

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '文章标题',
  `post_time` datetime DEFAULT NULL COMMENT '发表时间',
  `post_content` text COMMENT '文章内容',
  `post_type` tinyint(1) DEFAULT NULL COMMENT '文章类型0:原创1：转载',
  `last_modify_time` datetime DEFAULT NULL COMMENT '最近一次修改时间',
  `read_times` int(11) unsigned zerofill DEFAULT '00000000001' COMMENT '阅读次数',
  `status` tinyint(1) DEFAULT NULL COMMENT '状态0：草稿；1：发布；2：置顶；3:删除',
  `enable_comment` bit(1) DEFAULT b'1' COMMENT '允许评论',
  `user_id` int(11) DEFAULT NULL COMMENT '发表用户',
  `category_id` int(11) DEFAULT NULL,
  `comment_times` int(11) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk[post_user]open_id` (`user_id`),
  KEY `fk[post_category]category_id` (`category_id`),
  CONSTRAINT `fk[post_category]category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk[post_user]user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES ('1', '这里是测试文章一哈哈哈21这里是测试文测试文一哈哈哈21章一哈哈哈21', '2017-06-17 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000031', '2', '', '2', '1', '00000000000');
INSERT INTO `post` VALUES ('2', '这里是测试文章二', '2017-06-16 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000021', '2', '', '2', '1', '00000000003');
INSERT INTO `post` VALUES ('3', '这里是测试文章三哈哈哈21这里是测试文测试文一哈哈哈21章一哈哈哈21', '2017-06-17 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000027', '1', '', '2', '1', '00000000000');
INSERT INTO `post` VALUES ('4', '这里是测试文章四', '2017-06-16 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000001', '1', '', '2', '1', '00000000000');
INSERT INTO `post` VALUES ('5', '这里是测试文章五', '2017-06-16 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000001', '1', '', '2', '1', '00000000000');
INSERT INTO `post` VALUES ('6', '这里是测试文章六', '2017-06-16 19:57:14', '内容', '1', '2017-06-17 19:57:28', '00000000007', '1', '', '2', '1', '00000000000');
INSERT INTO `post` VALUES ('19', '12312', '2017-06-18 15:59:58', '\n“永远年轻，永远热泪盈眶”\n\n\n当你试图放弃一个你知道是正确的事情的时候,希望你能再看看这句话。\n\n——《我的奋斗》\n\n\n面对挫折、不要愤怒、不要抗议，\n\n只管埋头默默擦亮你的武器，准备下一次的战斗。\n\n我们是做事的，不是要给人家看某种表情的。\n\n——《我的奋斗》\n', '1', '2017-06-18 15:59:58', '00000000017', '1', '', '2', '1', '00000000004');
INSERT INTO `post` VALUES ('21', '测试一下下', '2017-06-18 20:37:53', '```java\n@RequestMapping(value = \"/queryPostListByPage\",method = RequestMethod.GET)\n    @ResponseBody\n    public HashMap<String,Object> query(\n            @RequestParam(required=false,defaultValue = \"1\")Integer page,\n            @RequestParam(required=false,defaultValue = \"-1\")Integer categoryId,\n            String searchText){\n        PageRowBounds pageRowBounds=new PageRowBounds(page,5);\n        List<Post> posts=postService.queryByPage(pageRowBounds,categoryId,searchText);\n        HashMap<String,Object> map=new HashMap<String,Object>();\n        map.put(\"rows\",posts);\n        map.put(\"total\",pageRowBounds.getTotal());\n        return map;\n    }\n\n    //测试阶段，暂时不加权限\n    @RequestMapping(value = \"/newPost\", method = RequestMethod.POST)\n    @ResponseBody\n    public Map<String,Object> newPost(@RequestBody Post post, HttpSession session) throws Exception {\n        User user=(User) session.getAttribute(\"user\");\n        post.setPostTime(new Date());\n        if(post.getStatus()==null){\n            post.setStatus((byte)1);\n        }\n        post.setLastModifyTime(new Date());\n        post.setUser(user);\n        if(post.getId()!=null){\n            postService.updateByPrimaryKeySelective(post);\n        }else{\n            postService.insertSelective(post);\n        }\n        return this.ajaxSuccessResponse(String.valueOf(post.getId()));\n    }\n```\n', '0', '2017-06-18 20:37:53', '00000000096', '1', '', '2', '1', '00000000000');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(64) DEFAULT '' COMMENT '角色名称',
  `role_type` tinyint(1) unsigned zerofill NOT NULL DEFAULT '1' COMMENT '角色类型 0：内置不可修改 1：自定义',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'admin', '0');
INSERT INTO `role` VALUES ('2', 'visitor', '0');

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk[role_permission]permission_id` (`permission_id`),
  KEY `fk[role_permission]role_id` (`role_id`),
  CONSTRAINT `fk[role_permission]permission_id` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk[role_permission]role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES ('1', '1', '1');
INSERT INTO `role_permission` VALUES ('2', '2', '1');
INSERT INTO `role_permission` VALUES ('3', '3', '1');
INSERT INTO `role_permission` VALUES ('4', '4', '1');
INSERT INTO `role_permission` VALUES ('5', '5', '1');
INSERT INTO `role_permission` VALUES ('6', '6', '1');
INSERT INTO `role_permission` VALUES ('7', '7', '1');
INSERT INTO `role_permission` VALUES ('8', '4', '2');
INSERT INTO `role_permission` VALUES ('9', '5', '2');
INSERT INTO `role_permission` VALUES ('10', '6', '2');
INSERT INTO `role_permission` VALUES ('11', '8', '1');
INSERT INTO `role_permission` VALUES ('12', '9', '1');
INSERT INTO `role_permission` VALUES ('13', '10', '2');
INSERT INTO `role_permission` VALUES ('14', '11', '1');
INSERT INTO `role_permission` VALUES ('15', '11', '2');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(64) DEFAULT NULL COMMENT '用户昵称',
  `avatar_url30` varchar(255) DEFAULT NULL,
  `avatar_url50` varchar(255) DEFAULT NULL,
  `avatar_url100` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT '' COMMENT '性别',
  `open_id` varchar(255) DEFAULT NULL COMMENT '用户open_id',
  `status` tinyint(1) DEFAULT '0' COMMENT '用户状态：0：正常；1：禁用',
  `disabled_time` datetime DEFAULT NULL COMMENT '禁言截止日期',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk[user]open_id` (`open_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', '‭馬輝', 'http://qzapp.qlogo.cn/qzapp/101389269/ADCA5196948120F29897B1BD9090A364/30', 'http://qzapp.qlogo.cn/qzapp/101389269/ADCA5196948120F29897B1BD9090A364/50', 'http://qzapp.qlogo.cn/qzapp/101389269/ADCA5196948120F29897B1BD9090A364/100', '男', 'ADCA5196948120F29897B1BD9090A364', '0', null);
INSERT INTO `user` VALUES ('3', '。', 'http://qzapp.qlogo.cn/qzapp/101389269/FAB56B0377CFE75488B0ACA8AD190C4A/30', 'http://qzapp.qlogo.cn/qzapp/101389269/FAB56B0377CFE75488B0ACA8AD190C4A/50', 'http://qzapp.qlogo.cn/qzapp/101389269/FAB56B0377CFE75488B0ACA8AD190C4A/100', '男', 'FAB56B0377CFE75488B0ACA8AD190C4A', '0', null);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `open_id` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk[user_role]open_id` (`open_id`),
  KEY `fk[user_role]role_id` (`role_id`),
  CONSTRAINT `fk[user_role]open_id` FOREIGN KEY (`open_id`) REFERENCES `user` (`open_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk[user_role]role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '1', 'ADCA5196948120F29897B1BD9090A364');

-- ----------------------------
-- Table structure for visitor_record
-- ----------------------------
DROP TABLE IF EXISTS `visitor_record`;
CREATE TABLE `visitor_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visit_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `out_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `nick_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visitor_record
-- ----------------------------
INSERT INTO `visitor_record` VALUES ('1', '2017-06-21 22:33:11', '2017-06-21 22:33:23', '‭馬輝');
INSERT INTO `visitor_record` VALUES ('2', '2017-06-25 11:05:08', null, '‭馬輝');
