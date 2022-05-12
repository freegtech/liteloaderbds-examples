//LiteXLoader Dev Helper
/// <reference path="c:\Users\Administrator\Documents\gt\script/Library/JS/Api.js" /> 

/*
power by github@freegtech
LiteLoaderBDS
*/
const menu = mc.newSimpleForm();
menu.setTitle("主菜单");
menu.setContent("欢迎使用菜单！")
menu.addButton("商店菜单","textures/items/emerald");
menu.addButton("传送菜单","textures/items/map_locked");
menu.addButton("个人设置","textures/ui/icon_setting");
menu.addButton("客服中心","textures/ui/icon_deals");
menu.addButton("发送广播","textures/ui/immersive_reader");
menu.addButton("退出游戏","textures/ui/cancel");

const store = mc.newSimpleForm();
store.setTitle("商店菜单-主页");
store.addButton("食物","textures/items/chicken_cooked");
store.addButton("工具","textures/items/iron_pickaxe");
store.addButton("武器","textures/items/iron_sword");
store.addButton("稀有","textures/items/totem");
store.addButton("附魔","textures/items/book_enchanted");
store.addButton("回收","textures/ui/trash_default");

const store_foods = mc.newSimpleForm();
store_foods.setTitle("商店-食物");
store_foods.addButton("面包 5金币*32","textures/items/bread");
store_foods.addButton("熟牛肉 15金币*32","textures/items/beef_cooked");
store_foods.addButton("熟鱼 12金币*32","textures/items/fish_cooked");
store_foods.addButton("蛋糕 20金币*32","textures/items/cake");
store_foods.addButton("苹果 10金币*32","textures/items/apple");

const store_tools = mc.newSimpleForm();
store_tools.setTitle("商店-工具");
store_tools.addButton("下界合金镐 1200金币","textures/items/netherite_pickaxe");
store_tools.addButton("下界合金锹 800金币","textures/items/netherite_shovel");
store_tools.addButton("下界合金锄 600金币","textures/items/netherite_hoe");
store_tools.addButton("下界合金斧 1000金币","textures/items/netherite_axe");
store_tools.addButton("铁桶 15金币","textures/items/bucket_empty");
store_tools.addButton("打火石 30金币","textures/items/flint_and_steel");

const store_rare = mc.newSimpleForm();
    store_rare.setTitle("商店-稀有");
    store_rare.addButton("不死图腾 800金币","textures/items/totem");
    store_rare.addButton("鞘翅 700金币","textures/items/elytra");
    store_rare.addButton("附魔金苹果 300金币","textures/items/apple_golden");
    store_rare.addButton("龟壳 400金币","textures/items/turtle_helmet");
    store_rare.addButton("末地水晶 500金币","textures/items/end_crystal");
    store_rare.addButton("命名牌 150金币","textures/items/name_tag");

    const store_weapon = mc.newSimpleForm();
    store_weapon.setTitle("商店-武器");
    store_weapon.addButton("下界合金剑 1300金币","textures/items/netherite_sword");
    store_weapon.addButton("钻石剑 750金币","textures/items/diamond_sword");
    store_weapon.addButton("弓 40金币","textures/items/bow_standby");
    store_weapon.addButton("弩 70金币","textures/items/crossbow_standby");
    store_weapon.addButton("盾牌 100金币","textures/items/empty_armor_slot_shield");

    const setting = mc.newSimpleForm();
    setting.setTitle("个人设置");
    setting.setContent("请谨慎修改");
    setting.addButton("生存模式");
    setting.addButton("更改名字");
    setting.addButton("个人信息");

    const tp = mc.newSimpleForm();
    tp.setTitle("传送菜单");
    tp.setContent("§4测试运行中,如有问题请与我们联系");
    tp.addButton("返回大厅");
    tp.addButton("返回重生点");
    tp.addButton("生存区");
//375 76 -230
mc.listen("onUseItemOn",(p,it,bl)=>{
    if (it.name=="Compass"){
        p.sendForm(menu,(player,id)=>{
            switch(id){
                case 0:
                    store.setContent("余额:"+money.get(player.xuid));
                    player.sendForm(store,(pl,i)=>{
                    switch(i){
                        case 0:
                            //foods
                            store_foods.setContent("余额:"+money.get(pl.xuid));
                            pl.sendForm(store_foods,(pla,re)=>{
                                let coin = money.get(pla.xuid);
                                switch(re){
                                    case 0:
                                           if(coin>5||coin==5){
                                               money.reduce(pla.xuid,5);
                                               pla.runcmd("give "+pla.name+" bread 32");
                                           }else{
                                               pla.tell("您的余额不足!")
                                           }
                                        break;
                                        case 1:
                                            if(coin>15||coin==15){
                                                money.reduce(pla.xuid,15);
                                                pla.runcmd("give "+pla.name+" cooked_beef 32");
                                            }else{
                                                pla.tell("您的余额不足!")
                                            }
                                            break;
                                            case 2:
                                                if(coin>12||coin==12){
                                                    money.reduce(pla.xuid,12);
                                                    pla.runcmd("give "+pla.name+" cooked_fish 32");
                                                }else{
                                                    pla.tell("您的余额不足!")
                                                }
                                                break;
                                                case 3:
                                                    if(coin>20||coin==20){
                                                        money.reduce(pla.xuid,20);
                                                        pla.runcmd("give "+pla.name+" cake 32");
                                                    }else{
                                                        pla.tell("您的余额不足!")
                                                    }
                                                    break;
                                                    case 4:
                                                        if(coin>10||coin==10){
                                                            money.reduce(pla.xuid,10);
                                                            pla.runcmd("give "+pla.name+" apple 32");
                                                        }else{
                                                            pla.tell("您的余额不足!")
                                                        }
                                                        break;
                                }
                            })
                            break;
                            case 1:
                                //tools
                                store_tools.setContent("余额:"+money.get(player.xuid));
                                pl.sendForm(store_tools,(pla,re)=>{
                                    let coin = money.get(pla.xuid);
                                    switch(re){
                                        case 0:
                                            if(coin>1200||coin==1200){
                                                money.reduce(pla.xuid,1200);
                                                pla.runcmd("give "+pla.name+" netherite_pickaxe");
                                            }else{
                                                pla.tell("您的余额不足!")
                                            }
                                            break;
                                            case 1:
                                                if(coin>800||coin==800){
                                                    money.reduce(pla.xuid,800);
                                                    pla.runcmd("give "+pla.name+" netherite_shovel");
                                                }else{
                                                    pla.tell("您的余额不足!")
                                                }
                                                break;
                                                case 2:
                                                    if(coin>600||coin==600){
                                                        money.reduce(pla.xuid,1200);
                                                        pla.runcmd("give "+pla.name+" netherite_hoe");
                                                    }else{
                                                        pla.tell("您的余额不足!")
                                                    }
                                                    break;
                                                    case 3:
                                                        if(coin>1200||coin==1000){
                                                            money.reduce(pla.xuid,1000);
                                                            pla.runcmd("give "+pla.name+" netherite_axe");
                                                        }else{
                                                            pla.tell("您的余额不足!")
                                                        }
                                                        break;
                                                        case 4:
                                                            if(coin>15||coin==15){
                                                                money.reduce(pla.xuid,15);
                                                                pla.runcmd("give "+pla.name+" bucket");
                                                            }else{
                                                                pla.tell("您的余额不足!")
                                                            }
                                                            break;
                                                            case 5:
                                                                if(coin>30||coin==30){
                                                                    money.reduce(pla.xuid,30);
                                                                    pla.runcmd("give "+pla.name+" flint and steel");
                                                                }else{
                                                                    pla.tell("您的余额不足!")
                                                                }
                                                                break;
                                    }
                                })
                                break;
                                case 2:
                                    //weapons
                                    store_weapon.setContent("余额:"+money.get(player.xuid));
                                    pl.sendForm(store_weapon,(pla,re)=>{
                                        let coin = money.get(pla.xuid);
                                        switch(re){
                                            case 0:
                                                if(coin>1300||coin==1300){
                                                    money.reduce(pla.xuid,1300);
                                                    pla.runcmd("give "+pla.name+" netherite_sword");
                                                }else{
                                                    pla.tell("您的余额不足!")
                                                }
                                                break;
                                                case 1:
                                                    if(coin>750||coin==750){
                                                        money.reduce(pla.xuid,750);
                                                        pla.runcmd("give "+pla.name+" diamond_sword");
                                                    }else{
                                                        pla.tell("您的余额不足!");
                                                    }
                                                    break;
                                                    case 2:
                                                        if(coin>40||coin==40){
                                                            money.reduce(pla.xuid,40);
                                                            pla.runcmd("give "+pla.name+" bow");
                                                        }else{
                                                            pla.tell("您的余额不足!")
                                                        }
                                                        break;
                                                        case 3:
                                                            if(coin>70||coin==70){
                                                                money.reduce(pla.xuid,70);
                                                                pla.runcmd("give "+pla.name+" crossbow");
                                                            }else{
                                                                pla.tell("您的余额不足!")
                                                            }
                                                            break;
                                                            case 4:
                                                                if(coin>100||coin==100){
                                                                    money.reduce(pla.xuid,100);
                                                                    pla.runcmd("give "+pla.name+" shield");
                                                                }else{
                                                                    pla.tell("您的余额不足!")
                                                                }
                                                                break;
                                        }
                                    })
                                    break;
                                    case 3:
                                        //rare
                                        store_rare.setContent("余额:"+money.get(player.xuid));
                                        pl.sendForm(store_rare,(pla,re)=>{
                                            let coin = money.get(pla.xuid);
                                            switch(re){
                                                case 0:
                                                    if(coin>800||coin==800){
                                                        money.reduce(pla.xuid,800);
                                                        pla.runcmd("give "+pla.name+" totem");
                                                    }else{
                                                        pla.tell("您的余额不足!")
                                                    }
                                                    break;
                                                    case 1:
                                                        if(coin>700||coin==700){
                                                            money.reduce(pla.xuid,700);
                                                            pla.runcmd("give "+pla.name+" elytra");
                                                        }else{
                                                            pla.tell("您的余额不足!")
                                                        }
                                                        break;
                                                        case 2:
                                                            if(coin>300||coin==300){
                                                                money.reduce(pla.xuid,300);
                                                                pla.runcmd("give "+pla.name+" enchanted_golden_apple");
                                                            }else{
                                                                pla.tell("您的余额不足!")
                                                            }
                                                            break;
                                                            case 3:
                                                                if(coin>400||coin==400){
                                                                    money.reduce(pla.xuid,400);
                                                                    pla.runcmd("give "+pla.name+" turtle_helmet");
                                                                }else{
                                                                    pla.tell("您的余额不足!")
                                                                }
                                                                break;
                                                                case 4:
                                                                    if(coin>500||coin==500){
                                                                        money.reduce(pla.xuid,500);
                                                                        pla.runcmd("give "+pla.name+" crystal");
                                                                    }else{
                                                                        pla.tell("您的余额不足!")
                                                                    }
                                                                    break;
                                                                    case 5:
                                                                        if(coin>150||coin==150){
                                                                            money.reduce(pla.xuid,150);
                                                                            pla.runcmd("give "+pla.name+" name_tag");
                                                                        }else{
                                                                            pla.tell("您的余额不足!")
                                                                        }
                                                                        break;
                                            }
                                        })
                                        break;
                                        case 4:
                                            //ench
                                            break;
                                            case 5:
                                                //default
                                                break;
                    }    
                    })
                    break;
                    case 1:
                        //teleport
                        p.sendForm(tp,(player,id)=>{
                            switch(id){
                                case 0:
                                    player.teleport(375,76,-230,0);
                                    break;
                                    case 1:
                                        player.teleport(player.getRespawnPosition());
                                        break;
                                        case 2:
                                            player.teleport(385,113,-1192,0);
                                            break;
                            }
                        })
                        break;
                        case 2:
                            p.sendForm(setting,(player,id)=>{
                                switch(id){
                                    case 0:
                                        //gamemode 0
                                        player.setGameMode(0);
                                        break;
                                        case 1:
                                            //rename
                                            break;
                                            case 2:
                                                //show self
                                                player.sendModalForm(player.name+"的个人信息","真实游戏昵称:"+player.realName+"\nXUID:"+player.xuid+"\nIP:"+player.getDevice().ip+"\nOS:"+player.getDevice().os+"\nclientid:"+player.getDevice().clientId+"\nCoin:"+money.get(player.xuid),"yes","no",(p,i)=>{});
                                                break;
                                }
                            })
                            break;
                            case 3:
                                //kf
                                break;
                                case 4:
                                    //gb
                                    break;
                                    case 5:
                                        player.kick("您已退出游戏！");
                                        break;
                            default:
                               //cancel
                                break;
            }
        })
    }else{

    }
})
