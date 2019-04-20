/**阿里文学**/
SET NAMES UTF8;
DROP DATABASE IF EXISTS ali;
CREATE DATABASE ali CHARSET=UTF8;
USE ali;

/**用户信息**/
CREATE TABLE ali_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
/**用户信息**/
INSERT INTO ali_user VALUES
(NULL, 'awei', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'adang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'aqiang', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'aya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
/**/
/*轮播图*/
CREATE TABLE ali_lunbo(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  author VARCHAR(32),
  content VARCHAR(248)
);
INSERT INTO ali_lunbo VALUES
(NULL,"圣祖","傲天无痕/玄幻",'这是一个全新升级的封神世界，这里有纣王，姜子牙，苏妲己，杨戬都将是全新的定位，这里有皇者，火云洞三皇；这里有圣人，道门三清；这里也有上古神魔，蚩尤，刑天；这里将有一个名为罗烈的少年，开启一个“我非英雄，却也盖世无双”的新封神时代！'),
(NULL,"唐朝好声音","九斗/古代言情","一个是权贵世家冷心冷面冷郎君，一个是乐户贱民笨手笨脚笨乐伎；一个是皇上宠爱俏王爷，一个貌倾天下玉美人……三个唐朝超女的初心不过是去大唐最高音乐学府宜春院唱歌，却不想后宫后位之争已把战火引向这里……"),
(NULL,"龙渊","骠骑/悬疑","世界上真的有龙吗？营川坠龙的龙骨最终被收藏何地？龙骨密码意欲何为？茫茫白山之中藏着怎样的秘密？消失在历史长河中的墨氏流派修建在史前遗迹上的墨冢到底是抵御还是保卫？传说中的墨藏能否释疑这一切？历史的长河中遗失的一百七十九年到底发生了什么？陆军..."),
(NULL,"代号传奇","菜刀姓李/军事","一支受到各国情报部门无数猜想的神秘部队；一名年轻的士兵，两者因何结缘？一名普通的列兵，为何频繁被追杀？夜宿坟场、刑场杀人、魔窟丽影、极限卧底……他与魔鬼美女毒枭间谍杀手共舞，游走在生死线上，成就了无数传奇，他，代号：传奇。"),
(NULL,"流光之城","靡宝/现代言情","在上海滩，谁人不知容家富贵滔天，也无人不知容大少爷乖僻冷傲，不服管教。冯世真偏向虎山行，过关斩将，顺利成为容家的家庭教师。同时，一场将所有人都算计进去的阴谋，也缓缓展开。在这一个同外界截然不同的华丽世界里，在这个流光溢彩的城中城之中..."),
(NULL,"兽夫宠妻日常","汲汲/玄幻言情","一跤摔到兽神大陆，被一个大长腿翅膀男神捡回去了！男神帅男神宠男神鸟巢里更强~江小濛脸红，你别脱衣服~~男神凑近，你孕素上升了，咱们来生蛋吧~
现代图书管理员穿越异世界，成为了神鹰兽人部落的唯一的亚兽人，兽人们环绕只为了看她一眼，衣食住行..");