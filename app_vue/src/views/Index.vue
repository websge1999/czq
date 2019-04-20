<template>
    <div id="main">
    <!-- 轮播图-->
    <div class="Rotation">
        <div class="carousel RotationChart" id="demo">
        <!-- 文章介绍-->
            <div class="RotationChartA" >
                <ul class="RotationChartul carousel-inner" data-ride="carousel"  >
                    <!-- 1-->
                    <li  class="carousel-item" :class="{active:i==0}" v-for="(item,i) in list" :key="i">
                        <a href="javascript:;">
                            <h2 class="mb-0">{{item.author}}</h2>
                            <p class="active mb-0">{{item.title}}</p>
                            <p class="mb-0">
                            {{item.content}}
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- img-->
            <div class="RotationChartB">
                <ul class="RotationChartBul carousel-indicators">
                    <li v-for='(item,i) of list' :class="{active:i==0}"  :data-slide-to="i" data-target="#demo"><</li>
                </ul>
            </div>
            <a href="#demo" class="a_left carousel-control-prev" data-slide="prev"></a>
            <a href="#demo" class="a_right carousel-control-next" data-slide="next"></a>
        </div>
    </div>
    <!-- 男女-->
    <div class="main">
        <div class="mainA d-flex justify-content-between">
            <!-- 第一列-->
            <ul class="aa">
                <li>
                    <h2 class="mainABor">男频榜单</h2>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">1.</em>
                        <img src="/img/1513670059305523.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">至尊丹帝</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">通林/玄幻</p>
                        </div>
                    </a>
                </li>
                <li class="mt-2">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">2.</em>
                        <img src="/img/201606229252359.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">斗魔传承</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">乾图/玄幻</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">3.</em>
                        <img src="/img/1520850338553185.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">魔天</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">狂奔的蜗牛/玄幻</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                <a href="javascript:;" class="d-block mainBorder">
                    <table></table>
                    <em class="chen">4.</em>
                    <img src="/img/2015070415513825.jpg" alt="" class="mb-3">
                    <div class="d-inline-block mt-2">
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">妙手小村医</h6>
                        <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">了了一生/都市</p>
                    </div>
                </a>
            </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block">
                        <table></table>
                        <em class="chen">5.</em>
                        <img src="/img/1521193745630242.jpg"" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">我是大总裁</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">皇辉/都市</p>
                        </div>
                    </a>
                </li>
            </ul>
            <!-- 第二列-->
            <ul class="aa">
                <li>
                    <h2 class="mainABor">女频榜单</h2>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">1.</em>
                        <img src="/img/1498635454110468.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">将军,该打针了</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">顾清琦/古代言情</p>
                        </div>
                    </a>
                </li>
                <li class="mt-2">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">2.</em>
                        <img src="/img/1521373265345713.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">随身空间</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">月牙/现代言情</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">3.</em>
                        <img src="/img/1532927202146296.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">景秀凰途:毒医</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">真爱小未凉/古代小言情</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">4.</em>
                        <img src="/img/1532927202146296.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">食全酒美:家</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">叶开/古代言情</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block">
                        <table></table>
                        <em class="chen">5.</em>
                        <img src="/img/1506678327185443.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">心理治愈师</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">歌尽鱼乏/悬疑灵异</p>
                        </div>
                    </a>
                </li>
            </ul>
            <!-- 第三列-->
            <ul class="aa">
                <li>
                    <h2 class="mainABor">分类推荐榜</h2>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">1.</em>
                        <img src="/img/2016081517181806.png"" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">阴阳天师</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">ws浮夸/悬疑</p>
                        </div>
                    </a>
                </li>
                <li class="mt-2">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">2.</em>
                        <img src="/img/2016072015213938.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">诡异</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">封小狗/悬疑</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">3.</em>
                        <img src="/img/2016060314532995.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">鬼墓之门</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">九福/悬疑</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block mainBorder">
                        <table></table>
                        <em class="chen">4.</em>
                        <img src="/img/1520908826355254.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">鬼术大宗师</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">黎照临/悬疑</p>
                        </div>
                    </a>
                </li>
                <li class="mt-3">
                    <a href="javascript:;" class="d-block">
                        <table></table>
                        <em class="chen">5.</em>
                        <img src="/img/1484034124135486.jpg" alt="" class="mb-3">
                        <div class="d-inline-block mt-2">
                            <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA">阴阳道</h6>
                            <p class="ml-2 mb-1 mt-2 mina_fontSb mina_fontCb">狸猫/悬疑</p>
                        </div>
                    </a>
                </li>
            </ul>
            <!-- 第四列-->
            <ul class="aa a4">
                <li class="p-0">
                    <h5 class="mainABora4">强力推荐榜</h5>
                </li>
                <li>
                    <a href="javascript:;" class="d-block">
                        <em class="chenQ d-inline-block">1.</em>
                        <h6 class="d-inline-block mina_fontSA mina_fontCA m-0">农门攻略：撩个将军来种田</h6>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class="d-block pb-2">
                        <em class="chenQ">2.</em>
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA m-0">农门医女</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block">
                        <em class="chenQ d-inline-block">3.</em>
                        <h6 class="d-inline-block mina_fontSA mina_fontCA m-0">寡妇门前多美男</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block pb-2">
                        <em class="chenQ">4.</em>
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA m-0">农门小辣妞</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block">
                        <em class="chenQ d-inline-block">5.</em>
                        <h6 class="d-inline-block mina_fontSA mina_fontCA m-0">后宫疑案录</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block pb-2">
                        <em class="chenQ">6.</em>
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA m-0">农家小医女</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block">
                        <em class="chenQ d-inline-block">7.</em>
                        <h6 class="d-inline-block mina_fontSA mina_fontCA m-0">两个爸爸一萌娃</h6>
                    </a>
                </li>
                <li class="pt-3">
                    <a href="javascript:;" class="d-block pb-2">
                        <em class="chenQ">8.</em>
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA m-0">魔主来啦，兽兽快跑</h6>
                    </a>
                </li>
                <li class="pt-4">
                    <a href="javascript:;" class="d-block">
                        <em class="chenQ d-inline-block">9.</em>
                        <h6 class="d-inline-block mina_fontSA mina_fontCA m-0">男神都是卫生巾</h6>
                    </a>
                </li>
                <li class="pt-4">
                    <a href="javascript:;" class="d-block pb-2">
                        <em class="chenQ">10.</em>
                        <h6 class="d-inline-block ml-2 mina_fontSA mina_fontCA m-0">神医毒妃</h6>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 分类图片墙-->
    <div class="classified">
        <!-- 第一层-->
        <ul class="classul d-flex mb-0 pl-0">
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_1.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">玄幻</h3>
                    <p>(3871)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_2.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">都市</h3>
                    <p>(3579)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_3.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">历史</h3>
                    <p>(477)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_4.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">悬疑</h3>
                    <p>(872)</p>
                </a>
            </li>
        </ul>
        <!-- 第二层-->
        <ul class="mb-0 classul d-flex pl-0">
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_5.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">科幻</h3>
                    <p>(908)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_6.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">玄幻言情</h3>
                    <p>(699)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula classulaH" style="background:url('/img/class_7.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">古代言情</h3>
                    <p>(3988)</p>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_8.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">现代言情</h3>
                    <p>(4430)</p>
                </a>
            </li>
        </ul>
        <!-- 第三层-->
        <ul class="mb-0 classul d-flex pl-0">
            <li class="li3">
                <a href="javascript:;" class="classula classulaW" style="background:url('/img/class_9.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">科幻</h3>
                    <p>(908)</p>
                </a>
            </li>
            <li class="border-0"></li>
            <li>
                <a href="javascript:;" class="classula" style="background:url('/img/class_10.jpg'); background-size: cover;">
                    <h3 class="classifiedSize">古代言情</h3>
                    <p>(3988)</p>
                </a>
            </li>
        </ul>
    </div>
    <!-- 男频精选-->
    <div class="mainB">
        <div class="mainB1 text-center">
            <h2>男频精选</h2>
        </div>
        <div class="mainB2 pb-5">
            <div class="mainB21">
                <ul class="mainB2ul list-unstyled">
                    <!-- 1-->
                    <li class="mainB2li">
                        <a href="javascript:;"  style=" color:#b2b2b2 font-size=12px">
                            <img src="/img/1521009809234225.jpg" alt=""/>
                            <h6 class="mainB2h6">我的绝色总裁</h6>
                            <p class="mainB2p">花幽山月/都市</p>
                        </a>
                    <!--    2-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1481800407850652.jpg" alt=""/>
                            <h6 class="mainB2h6">太古龙尊</h6>
                            <p class="mainB2p">五岳之巅/玄幻</p>
                        </a>
                    </li>
                    <!-- 3-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1516181499468243.jpg" alt=""/>
                            <h6 class="mainB2h6"> 都市逍遥高手</h6>
                            <p class="mainB2p">黄义/都市</p>
                        </a>
                    </li>
                    <!-- 4-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/2016092215045881.jpg" alt=""/>
                            <h6 class="mainB2h6">山村小玲主</h6>
                            <p class="mainB2p">黄义/都市</p>
                        </a>
                    </li>
                    <!-- 5-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/2016082518103272.jpg" alt=""/>
                            <h6 class="mainB2h6">帝国君主</h6>
                            <p class="mainB2p">倪观/历史</p>
                        </a>
                    </li>
                    <!-- 6-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/2016091413065333.jpg" alt=""/>
                            <h6 class="mainB2h6">最强小村庄</h6>
                            <p class="mainB2p">硝烟/都市</p>
                        </a>
                    </li>
                </ul>
            </div>
            <a href="javascript:;"  class="a_left2"></a>
            <a href="javascript:;"  class="a_right2"></a>
        </div>
        <div class="mainB3 d-flex justify-content-between">
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">仙侠</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">太古虫仙</a></li>
                <li><a href="javascript:;" class="mainB3a">族神狱狱计</a></li>
                <li><a href="javascript:;" class="mainB3a">识破惊仙</a></li>
                <li><a href="javascript:;" class="mainB3a">疯诗</a></li>
                <li><a href="javascript:;" class="mainB3a">力破仙凡</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">悬疑</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">风城谍影</a></li>
                <li><a href="javascript:;" class="mainB3a">活灵追徒者</a></li>
                <li><a href="javascript:;" class="mainB3a">来自未来的捉鬼系统</a></li>
                <li><a href="javascript:;" class="mainB3a">风云沉浮</a></li>
                <li><a href="javascript:;" class="mainB3a">守尸鬼手札</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">都市</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">乡村小神算</a></li>
                <li><a href="javascript:;" class="mainB3a">至尊小农民</a></li>
                <li><a href="javascript:;" class="mainB3a">乡村野医</a></li>
                <li><a href="javascript:;" class="mainB3a">超品进化</a></li>
                <li><a href="javascript:;" class="mainB3a">花都圣手</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">玄幻</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">天行九界</a></li>
                <li><a href="javascript:;" class="mainB3a">最强怼人系统</a></li>
                <li><a href="javascript:;" class="mainB3a">万古邪帝</a></li>
                <li><a href="javascript:;" class="mainB3a">绝世战灵</a></li>
                <li><a href="javascript:;" class="mainB3a">魔道神尊</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>

        </div>
    </div>
    <!--女频竞选-->
    <div class="mainB">
        <div class="mainB1 text-center">
            <h2>女频精选</h2>
        </div>
        <div class="mainB2 pb-5">
            <div class="mainB21">
                <ul class="mainB2ul list-unstyled">
                    <!-- 1-->
                    <li class="mainB2li">
                        <a href="javascript:;"  style=" color:#b2b2b2 font-size=12px">
                            <img src="/img/1536549892575882.jpg" alt=""/>
                            <h6 class="mainB2h6">长生殿</h6>
                            <p class="mainB2p">红梅朱香/都市</p>
                        </a>
                        <!--    2-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1494928829776341.jpg" alt=""/>
                            <h6 class="mainB2h6">师兄总是要开花</h6>
                            <p class="mainB2p">韩雨水/仙侠奇缘</p>
                        </a>
                    </li>
                    <!-- 3-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1513670393604689.jpg" alt=""/>
                            <h6 class="mainB2h6"> 天下男修皆浮云</h6>
                            <p class="mainB2p">青衫烟雨/仙侠奇缘</p>
                        </a>
                    </li>
                    <!-- 4-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1498721665462787.jpg" alt=""/>
                            <h6 class="mainB2h6">汉宫春:皇帝养</h6>
                            <p class="mainB2p">离小九/古代言情</p>
                        </a>
                    </li>
                    <!-- 5-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1520909171987193.jpg" alt=""/>
                            <h6 class="mainB2h6">春闺密录:厂宫</h6>
                            <p class="mainB2p">平白兄/古代言情</p>
                        </a>
                    </li>
                    <!-- 6-->
                    <li>
                        <a href="javascript:;">
                            <img src="/img/1516349637889944.jpg" alt=""/>
                            <h6 class="mainB2h6">大宋刑部通缉</h6>
                            <p class="mainB2p">宋一/悬疑灵异</p>
                        </a>
                    </li>
                </ul>
            </div>
            <a href="javascript:;"  class="a_left2"></a>
            <a href="javascript:;"  class="a_right2"></a>
        </div>
        <div class="mainB3 d-flex justify-content-between">
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">仙侠奇缘</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">此去流年</a></li>
                <li><a href="javascript:;" class="mainB3a">我待修仙如初恋</a></li>
                <li><a href="javascript:;" class="mainB3a">仙门在上,萌鬼翻身入我怀</a></li>
                <li><a href="javascript:;" class="mainB3a">清平歌</a></li>
                <li><a href="javascript:;" class="mainB3a">女侠她今天想打劫</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">悬疑灵异</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">鬼夫缠身</a></li>
                <li><a href="javascript:;" class="mainB3a">刑事追击</a></li>
                <li><a href="javascript:;" class="mainB3a">罪颜</a></li>
                <li><a href="javascript:;" class="mainB3a">大宋皇庭通缉录</a></li>
                <li><a href="javascript:;" class="mainB3a">少帅,你老婆又来破案了</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">古代言情</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">农家小命夫</a></li>
                <li><a href="javascript:;" class="mainB3a">山河债</a></li>
                <li><a href="javascript:;" class="mainB3a">农家女地主:我有特殊的虐渣技</a></li>
                <li><a href="javascript:;" class="mainB3a">五妃宅府记事</a></li>
                <li><a href="javascript:;" class="mainB3a">农家有女,良田散亩换江山</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>
            <ul class="list-unstyled">
                <li class="mb-4">
                    <h2 class="mainB3h2">现代言情</h2>
                </li>
                <li><a href="javascript:;" class="mainB3a">惹祸成婚,傅少,请关灯</a></li>
                <li><a href="javascript:;" class="mainB3a">豪门辣妻:总裁,狠狠爱</a></li>
                <li><a href="javascript:;" class="mainB3a">先婚后爱:总裁的宠妻攻略</a></li>
                <li><a href="javascript:;" class="mainB3a">隐婚蜜爱:欧少强宠小蛮妻</a></li>
                <li><a href="javascript:;" class="mainB3a">隐藏boss:老公低调点</a></li>
                <li class="text-right">
                    <a href="javascript:;" class="active mainB3a">更多&gt;</a>
                </li>
            </ul>

        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.lunboload()
        },
        methods:{
            lunboload(){
                var url="http://127.0.0.1:3000/lunbo";
                this.axios.get(url).then(result=>{
                    //console.log(result.data);
                    this.list=result.data
                    console.log(this.list);
                })
            }
        }
    }
</script>

<style scoped>
    /*header  footer
@media screen and (min-width: 992px) {
    .my_header{
        width: 100%;
    }
    .my_footer{
        width: 100%;
        height: 23rem;
    }
}
@media screen and (min-width: 576px) {
    .my_header{
        width: 100%;
        height: 14rem;
    }
    .my_footer{
        width: 100%;
        height: 19rem;
    }
}+*/
/*�ֲ�ͼ*/
.Rotation{
    position: relative;
    width: 100%;
    height: 480px;
    background: url(/img/bannerbg.jpg);
    color: #fff;
    background-size: cover;
    z-index: 9;
}
.RotationChart {
    width: 1200px;
    height: 480px;
    margin: auto;
    position: relative;
}
.RotationChart .RotationChartA{
    position: relative;
    height: 240px;
    width: 1200px;
    overflow: hidden;
    padding-top: 80px;
    margin: 0 auto;
}
.RotationChart .RotationChartul{
    margin: auto;
    position: relative;
    width: 768px;
    height: 210px;
    overflow: hidden;
}
/* .activeli{
    opacity: 1 !important;
} */
.RotationChart .RotationChartul li{
    position: absolute;
    text-align: center;
    width:700px;
    /* opacity: 0; */
}
.RotationChart .RotationChartul li .activeli{
    z-index:10;
}
.RotationChart .RotationChartul li a{
    color:#fff  ;
    text-decoration:none;
}
.RotationChart .RotationChartul li a .active{
    font-size: 16px;
}
.RotationChart .RotationChartul li a p{
    font-size: 16px;
    line-height: 2rem;
}
.RotationChart .RotationChartB{
    text-align: center;
    overflow: hidden;
    position: relative;
    height: 240px;
}
.RotationChart .RotationChartB ul{
    margin: -90px auto ;
    overflow: hidden;
    width:378px;
    margin-top: 45px;
}
.RotationChartBul{
    margin: 0 auto;
    width: 378px;
    margin-top: 45px;
    overflow: hidden;
    height: 195px;
}
.RotationChartBul li{
    list-style: none;
    float: left;
    margin-right: 15px;
    cursor: pointer;
}
.RotationChartBul li img{
    width: 48px;
    padding-top: 80px;
    display: inline-block;
    opacity: 0.6;
}
.a_left{
    position: absolute;
    display: block;
    top:190px;
    width:22px;
    height: 39px;
    background:url("/img/bn_arrows.png");
}
.a_right{
    position: absolute;
    display: block;
    top:190px;
    width:22px;
    height: 39px;
    background:url("/img/bn_arrows.png");
    background-position: -22px 0;
    right: 0;
}
/*��Ů��ǿ*/
.main{
    width:1000px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    /*height: 689px;*/
}
.main .mainA{
    padding-top:65px;
    padding-bottom: 80px;
    overflow: hidden;
    width:1040px;
}
.main .mainA ul{
    width:232px;
    height:544px;
    list-style: none;
    position: relative;
}
.dd{
    width:184px !important;
    border:1px solid  #d39e00;
}
.mainABor{
    /*border-bottom:1px solid #eb634b;*/
    font-weight: 400 ;
    font-size: 18px ;
}
.mainABora4{
    width:184px;
    height: 24px;
}
.chen {
    display : block;
    float: left;
    width: 32px;
    line-height: 32px;
    font-size: 24px;
    color: #000;
}
.chenQ{
    float: left;
    width: 16px;
    line-height: 16px;
    font-size: 18px;
    color: #000;
}
.aa li img{
    width: 48px;
    border:0;
}
.mina_fontSA{
    font-size:14px !important;
}
.mina_fontCA{
    color:#000 !important;
}
.mina_fontSb{
    font-size:12px !important;
}
.mina_fontCb{
    color:#b2b2b2 !important;
}
.mainBorder{
    border-bottom: 1px dashed #e2e2e2;;
}
.a4 li{
    padding: 9px 0;
    height: 48px;
}
/*����*/
.classified{
    width:100%;
    /*1904px*/
    /*width: 200px;*/
    position: relative;
    /*border:1px solid red;*/
}
.classified .classul li{
    width:25%;
    height: 200px;
    /*border:1px solid blue;*/
}
.li3{
    width:50%  !important;
}
.classified .classul li .classula{
    text-align: center;
    display: block;
    height: 200px;
    color:#fff;
}
.classulaH{
    height:400px !important;
}
.classulaW{
    width:100% !important;
}
.classula:hover {
    text-decoration: none;
}
.classifiedSize{
    padding-top: 90px;
    font-size: 18px;
}
/*��Ƶ��ѡ �ֲ�ͼ*/
.mainB{
    width:1000px;
    position: relative;
    margin: auto;
    padding-top: 80px;
}
.mainB .mainB1{
    padding: 20px 0;
}
/*
.mainB ::after {
    content: '';
    position: absolute;
    border: 1px solid #eb634b;
    width: 48px;
    left: 50%;
    bottom: 0;
    margin-left: -24px;
}
*/
.mainB2{
    position: relative;
}
.mainB21{
    width: 1000px;
    margin: auto;
    position: relative;
    height: 224px;
    text-align: left;
    overflow: hidden;
}
.mainB21ul{
    overflow: hidden;
    width: 9999px;
}
.mainB2ul::after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
}
.mainB2ul li{
     float: left;
     width: 166px;
 }
.mainB2ul li a{
    width:120px;
    text-align: center;
    display: block;
    text-decoration: none;
}
.mainB2ul li a img{
    width:120px;
    height: 160px;
}
.mainB2h6{
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
    color:#000;
}
.mainB2p{
    font-size: 12px;
    color: #b2b2b2;
    line-height: 12px;
}
.a_left2{
    position: absolute;
    display: block;
    top:60px;
    left:-80px;
    width:22px;
    height: 39px;
    background:url("/img/bn_arrows.png");
    color:#333333;
}
.a_right2{
    position: absolute;
    display: block;
    top:60px;
    width:22px;
    height: 39px;
    background:url("/img/bn_arrows.png");
    background-position: -22px 0;
    right: -40px;
    color:#333333;
}
.mainB3 ul{
    width:202px;
}
.mainB3h2{
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
}
.mainB3a{
    display: block;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
}
.active{
    font-size: 12px;
    color: #eb634b;
}
.mainB3 ul li a:hover{
    color: #eb634b;
    text-decoration: none;
}
.mainC{
    position: relative;
    background: #fef5e6;
}
.mainC1{
    margin: 0 auto;
    padding: 80px 0;
    width: 1000px;
}
.mainC1 h4{
    height: 48px;
    line-height: 48px;
    margin-bottom: 0;
}



</style>