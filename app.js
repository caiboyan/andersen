/* ============ 一、故事数据 ============ */
const STORIES = [
  {
    id: 1, name: "野天鹅", icon: "🦢",
    steps: ["timeline","highlight","emotion","branch","write"],
    data: {
      timeline: {
        q: "把事件按顺序拖到小路上",
        events: ["艾丽莎去找哥哥们","哥哥们变成野天鹅","仙女告诉她要织披甲","她一年不能说话","被国王误会","最后开口救哥哥"]
      },
      highlight: {
        q: "点出最重要的一句",
        sentences: [
          {t:"你必须一年不说话。", ok:false},
          {t:"她一句话也不能说，否则哥哥们就会死。", ok:true},
          {t:"她日夜不停地织披甲。", ok:false}
        ]
      },
      emotion: {
        q: "把表情拖到对应时刻",
        moments: ["刚知道哥哥变天鹅","被误解时","最后开口时"],
        faces: ["难过","坚定","孤单","松了一口气"]
      },
      branch: {
        q: "如果艾丽莎中途说了一句话，会怎样？",
        options: ["哥哥们得救","哥哥们会死","她会被放走"],
        correct: 1
      },
      write: {
        q: "如果艾丽莎只能对哥哥们说一句话，她会说什么？",
        words: ["哥哥","我","一直","想念","你们","坚持","别怕","爱"]
      }
    }
  },
  {
    id: 2, name: "老头子总是对的", icon: "🐴",
    steps: ["timeline","flip","emotion","vote","write"],
    data: {
      timeline: {
        q: "把交换顺序拖成一条线",
        events: ["马","牛","羊","鹅","鸡","一袋烂苹果"]
      },
      flip: {
        q: "翻卡片，找出老太太信任老头子的证据",
        cards: [
          {t:"老头子总是对的。", ok:true},
          {t:"我们换到的东西总是越来越好。", ok:true},
          {t:"她亲了他一下。", ok:true},
          {t:"老太太生气了。", ok:false},
          {t:"她骂了他。", ok:false},
          {t:"她让他去认错。", ok:false}
        ]
      },
      emotion: {
        q: "拖滑块，表示老太太的情绪温度",
        moments: ["老头子出发前","每次交换后","最后英国人给金币时"]
      },
      vote: {
        q: "老太太说“老头子总是对的”，你觉得：",
        options: ["是信任","是傻","是幽默","是维持感情的方式"]
      },
      write: {
        q: "现代版：老头子用手机换了什么？老太太会怎么说？",
        words: ["手机","换","老太太","说","总是","对的","真好","哈哈"]
      }
    }
  },
  {
    id: 3, name: "卖火柴的小女孩", icon: "🔥",
    steps: ["timeline","magnifier","emotion","highlight","record"],
    data: {
      timeline: {
        q: "把画面按顺序排好",
        events: ["雪夜卖火柴","擦第一根火柴","看到奶奶","擦最后一把火柴","微笑离世"]
      },
      magnifier: {
        q: "点一下画面里的隐藏细节",
        dots: ["没穿的鞋","火柴","墙角","奶奶的影像"]
      },
      emotion: {
        q: "拖滑块，表示小女孩的情绪温度",
        moments: ["擦火柴前","看到奶奶时","最后微笑时"]
      },
      highlight: {
        q: "点出最能表现幻想和现实对比的句子",
        sentences: [
          {t:"她不敢回家。", ok:false},
          {t:"她看到了温暖的火炉。", ok:false},
          {t:"她跟着奶奶飞到了没有寒冷的地方。", ok:true}
        ]
      },
      record: {
        q: "对小女孩说一句话，录下来",
        prompt: "按住录音，松开结束"
      }
    }
  },
  {
    id: 4, name: "拇指姑娘", icon: "🌸",
    steps: ["timeline","classify","card","match","draw"],
    data: {
      timeline: {
        q: "把事件按顺序拖到小路上",
        events: ["从花里出生","被癞蛤蟆带走","被田鼠收留","照顾燕子","被燕子带到花王国","遇见花王子"]
      },
      classify: {
        q: "把属于这个故事的物品拖进宝箱",
        items: ["燕子","鼹鼠","花王子","癞蛤蟆","核桃壳","花瓣"],
        distractors: ["玻璃鞋","南瓜","金鱼"]
      },
      card: {
        q: "把属性卡拖给拇指姑娘",
        attrs: ["善良","勇敢","想自由","被占有","孤独"]
      },
      match: {
        q: "把人物和他们的作用连起来",
        left: ["拇指姑娘","癞蛤蟆","鼹鼠","燕子"],
        right: ["想占有她","真正帮她","给她安全但不自由","带她走向光明"]
      },
      draw: {
        q: "画出拇指姑娘在花王国的心情"
      }
    }
  },
  {
    id: 5, name: "坚定的锡兵", icon: "🪖",
    steps: ["order","odd","emotion","branch","write"],
    data: {
      order: {
        q: "把句子排成正确顺序",
        events: ["锡兵只有一条腿","他爱上舞蹈家","被吹到窗外","被鱼吞下","回到厨房","融化成锡心"]
      },
      odd: {
        q: "点出故事里没有的细节",
        items: ["锡兵","舞蹈家","下水道","鱼","火炉"],
        odd: "一只猫"
      },
      emotion: {
        q: "把表情拖到对应时刻",
        moments: ["被吹走时","看到舞蹈家时","融化时"],
        faces: ["害怕","坚定","深情","平静"]
      },
      branch: {
        q: "如果锡兵有两条腿，故事会不同吗？",
        options: ["会，他就能跑","不会，坚定和腿无关","说不清"],
        correct: 1
      },
      write: {
        q: "写一句锡兵不能说话时心里想的话",
        words: ["我","要","站着","看着","她","不怕","坚定","心"]
      }
    }
  },
  {
    id: 6, name: "皇帝的新装", icon: "👑",
    steps: ["timeline","flip","chat","vote","write"],
    data: {
      timeline: {
        q: "把事件按顺序拖到小路上",
        events: ["骗子说新衣只有聪明人看得见","皇帝给骗子钱","大臣假装看不见","皇帝裸体游行","小孩说真话"]
      },
      flip: {
        q: "翻卡片，找出大臣为什么不敢说真话的证据",
        cards: [
          {t:"难道我是傻子吗？", ok:true},
          {t:"我不能让人知道我看不见。", ok:true},
          {t:"他什么也没穿呀！", ok:false},
          {t:"皇帝很聪明。", ok:false},
          {t:"衣服很漂亮。", ok:false},
          {t:"我必须把游行大典举行完毕。", ok:true}
        ]
      },
      chat: {
        q: "给皇帝发一条消息，看他怎么回",
        prompt: "你真的看不见衣服吗？",
        reply: "我当然看得见，只是……"
      },
      vote: {
        q: "小孩为什么敢说真话？",
        options: ["他不懂规矩","他没有顾虑","他天真","我有不同看法"]
      },
      write: {
        q: "写一段“游行之后”的新闻标题和一句话",
        words: ["皇帝","游行","小孩","真话","新闻","之后","大家","明白"]
      }
    }
  },
  {
    id: 7, name: "蜗牛和玫瑰树", icon: "🌹",
    steps: ["match","highlight","card","vote","write"],
    data: {
      match: {
        q: "把原因和结果连起来",
        left: ["蜗牛整天缩在壳里","玫瑰树每年开花","蜗牛说世界与我无关","玫瑰树说我要开花"],
        right: ["因为它觉得没意义","因为它想奉献","因为它不参与","因为它觉得开花就是幸福"]
      },
      highlight: {
        q: "点出最能表现两者不同态度的句子",
        sentences: [
          {t:"世界与我无关。", ok:true},
          {t:"我要开花，因为我必须开花。", ok:true},
          {t:"我把我的一切都给了你。", ok:false}
        ]
      },
      card: {
        q: "把属性卡分别拖给蜗牛和玫瑰树",
        attrs: ["消极","旁观","奉献","幸福","自私","满足"]
      },
      vote: {
        q: "你觉得谁更幸福？",
        options: ["蜗牛，因为它不累","玫瑰树，因为它开花","都不幸福","我有不同看法"]
      },
      write: {
        q: "写一句“蜗牛后来想通了”的话",
        words: ["我","也","可以","开花","世界","有关","幸福","现在"]
      }
    }
  },
  {
    id: 8, name: "海的女儿", icon: "🌊",
    steps: ["timeline","magnifier","emotion","vote","record"],
    data: {
      timeline: {
        q: "把画面按顺序排好",
        events: ["海底","救王子","换双腿","王子娶别人","姐姐们给刀","变成泡沫"]
      },
      magnifier: {
        q: "点一下画面里的隐藏细节",
        dots: ["声音","双腿","王子","刀","泡沫","阳光"]
      },
      emotion: {
        q: "拖滑块，表示小人鱼的情绪温度",
        moments: ["救王子时","换腿时","变成泡沫时"]
      },
      vote: {
        q: "小人鱼的牺牲值得吗？",
        options: ["值得，因为她追求灵魂","不值得，她失去太多","说不清","我有不同看法"]
      },
      record: {
        q: "对小人鱼说一句话，录下来",
        prompt: "按住录音，松开结束"
      }
    }
  },
  {
    id: 9, name: "打火匣", icon: "🔥",
    steps: ["classify","odd","chat","branch","draw"],
    data: {
      classify: {
        q: "把属于这个故事的物品拖进宝箱",
        items: ["打火匣","巫婆","金币","三只狗","监狱","国王"],
        distractors: ["玻璃鞋","南瓜","金鱼"]
      },
      odd: {
        q: "点出故事里没有的细节",
        items: ["士兵","巫婆","狗","金币","打火匣"],
        odd: "一只猫"
      },
      chat: {
        q: "给士兵发一条消息，看他怎么回",
        prompt: "你为什么要杀巫婆？",
        reply: "因为她想害我，我只能先下手。"
      },
      branch: {
        q: "如果士兵没有打火匣，会怎样？",
        options: ["他会被关在监狱","他还能当国王","巫婆会帮他"],
        correct: 0
      },
      draw: {
        q: "画出士兵当上国王后的心情"
      }
    }
  },
  {
    id: 10, name: "丑小鸭", icon: "🦆",
    steps: ["timeline","highlight","emotion","match","write"],
    data: {
      timeline: {
        q: "把事件按顺序拖到小路上",
        events: ["出生","被欺负","独自过冬","看到天鹅","变成天鹅"]
      },
      highlight: {
        q: "点出最能表现丑小鸭孤单的句子",
        sentences: [
          {t:"它觉得非常孤单。", ok:true},
          {t:"大家都笑它。", ok:true},
          {t:"它飞向天鹅。", ok:false}
        ]
      },
      emotion: {
        q: "拖滑块，表示丑小鸭的情绪温度",
        moments: ["被欺负时","独自过冬时","变成天鹅时"]
      },
      match: {
        q: "把故事和主题连起来",
        left: ["丑小鸭","其他鸭子","天鹅","冬天"],
        right: ["成长","偏见","真正的自己","考验"]
      },
      write: {
        q: "写一句“丑小鸭对小时候的自己说的话”",
        words: ["你","会","变成","天鹅","别怕","坚持","孤单","值得"]
      }
    }
  },
  {
    id: 11, name: "小意达的花儿", icon: "🌼",
    steps: ["timeline","flip","emotion","branch","draw"],
    data: {
      timeline: {
        q: "把画面按顺序排好",
        events: ["花儿枯萎","学生说花儿跳舞","小意达晚上偷看","花儿跳舞","埋葬花儿"]
      },
      flip: {
        q: "翻卡片，找出“花儿在跳舞”的想象证据",
        cards: [
          {t:"花儿晚上会跳舞。", ok:true},
          {t:"它们跳得很开心。", ok:true},
          {t:"小意达相信了。", ok:true},
          {t:"花儿死了。", ok:false},
          {t:"学生说谎。", ok:false},
          {t:"花儿在睡觉。", ok:false}
        ]
      },
      emotion: {
        q: "把表情拖到对应时刻",
        moments: ["花儿枯萎时","听学生讲时","埋葬花儿时"],
        faces: ["难过","好奇","相信","平静"]
      },
      branch: {
        q: "如果小意达不相信学生的话，故事会怎样？",
        options: ["她会很伤心","她会没有想象","她会更现实"],
        correct: 1
      },
      draw: {
        q: "画一画“你家的花晚上会做什么”"
      }
    }
  },
  {
    id: 12, name: "枞树", icon: "🌲",
    steps: ["match","magnifier","card","vote","write"],
    data: {
      match: {
        q: "把原因和结果连起来",
        left: ["枞树想长大","它被砍倒","它被装饰","它被烧掉"],
        right: ["因为想离开","因为想被重视","因为想过更好的生活","因为最后什么也没留下"]
      },
      magnifier: {
        q: "点一下画面里的隐藏细节",
        dots: ["小枞树","森林","斧头","装饰","火"]
      },
      card: {
        q: "把属性卡拖给枞树",
        attrs: ["不满足","羡慕","后悔","渴望","失望"]
      },
      vote: {
        q: "枞树真正想要的是什么？",
        options: ["长大","离开","被重视","回到过去"]
      },
      write: {
        q: "写一句“枞树如果能回到过去，它会说什么”",
        words: ["我","想","回到","现在","珍惜","森林","朋友","阳光"]
      }
    }
  },
  {
    id: 13, name: "一个豆荚中的五粒豆", icon: "🫛",
    steps: ["order","classify","card","match","record"],
    data: {
      order: {
        q: "把句子排成正确顺序",
        events: ["五粒豆在豆荚里","豆荚裂开","五粒豆去不同地方","最小的一粒长在窗边","小女孩看到豆苗","小女孩好起来"]
      },
      classify: {
        q: "把属于这个故事的物品拖进宝箱",
        items: ["豆荚","豆苗","窗台","小女孩","病床"],
        distractors: ["南瓜","金鱼","玻璃鞋"]
      },
      card: {
        q: "把属性卡分别拖给豆子和小女孩",
        attrs: ["希望","生命","孤独","病弱","坚持"]
      },
      match: {
        q: "把故事和主题连起来",
        left: ["最小的一粒豆","另外四粒豆","小女孩","窗台"],
        right: ["希望","平凡","康复","生命"]
      },
      record: {
        q: "对最小的一粒豆说一句话，录下来",
        prompt: "按住录音，松开结束"
      }
    }
  }
];

/* ============ 二、全局状态 ============ */
const state = {
  currentStory: null,
  currentStep: 0,
  answers: {},
  progress: {}
};

/* ============ 三、工具函数 ============ */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function showScreen(id){
  $$(".screen").forEach(s=>s.classList.remove("active"));
  $("#"+id).classList.add("active");
}

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove("show"), 1600);
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

/* ============ 四、通用拖拽（支持手指拖动 + 点击选中） ============ */
function makeDraggable(chip, dropSelector, onDrop){
  let ghost = null, moved = false;

  chip.addEventListener("pointerdown", e=>{
    e.preventDefault();
    try{ chip.setPointerCapture(e.pointerId); }catch(_){}
    moved = false;
    ghost = chip.cloneNode(true);
    ghost.style.position = "fixed";
    ghost.style.left = e.clientX + "px";
    ghost.style.top = e.clientY + "px";
    ghost.style.transform = "translate(-50%,-50%)";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0.9";
    ghost.style.zIndex = "9999";
    document.body.appendChild(ghost);
    chip.classList.add("picked");
  });

  chip.addEventListener("pointermove", e=>{
    if(!ghost) return;
    moved = true;
    ghost.style.left = e.clientX + "px";
    ghost.style.top = e.clientY + "px";
    document.querySelectorAll(dropSelector).forEach(d=>d.classList.remove("over"));
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const drop = el && el.closest(dropSelector);
    if(drop && !drop.classList.contains("filled")) drop.classList.add("over");
  });

  chip.addEventListener("pointerup", e=>{
    if(ghost){ ghost.remove(); ghost = null; }
    chip.classList.remove("picked");
    document.querySelectorAll(dropSelector).forEach(d=>d.classList.remove("over"));
    if(!moved) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const drop = el && el.closest(dropSelector);
    if(drop && !drop.classList.contains("filled")){
      onDrop(chip, drop);
    }
  });

  chip.addEventListener("pointercancel", ()=>{
    if(ghost){ ghost.remove(); ghost = null; }
    chip.classList.remove("picked");
    document.querySelectorAll(dropSelector).forEach(d=>d.classList.remove("over"));
  });
}

/* ============ 五、首页地图 ============ */
function renderMap(){
  const grid = $("#islandGrid");
  grid.innerHTML = "";
  STORIES.forEach((s, i)=>{
    const div = document.createElement("div");
    div.className = "island";
    const done = state.progress[s.id] || [];
    const doneCount = done.filter(Boolean).length;
    if(doneCount === 5) div.classList.add("done");
    div.innerHTML = `
      <span class="num">${i+1}</span>
      <div class="icon">${s.icon}</div>
      <div class="name">${s.name}</div>
      <div class="badges">
        ${[0,1,2,3,4].map(k=>`<span class="badge-dot ${done[k]?'on':''}"></span>`).join("")}
      </div>
    `;
    div.onclick = ()=> openStory(s.id);
    grid.appendChild(div);
  });
  renderCollection();
}

function renderCollection(){
  const bar = $("#collectionBar");
  const total = STORIES.length * 5;
  let done = 0;
  STORIES.forEach(s=>{
    const d = state.progress[s.id] || [];
    done += d.filter(Boolean).length;
  });
  bar.innerHTML = `<span class="collection-item">已收集 ${done} / ${total} 颗童话元素</span>`;
}

/* ============ 六、打开故事 ============ */
function openStory(id){
  const story = STORIES.find(s=>s.id===id);
  state.currentStory = story;
  state.currentStep = 0;
  $("#storyTitle").textContent = story.name;
  showScreen("storyScreen");
  renderStep();
}

/* ============ 七、渲染步骤 ============ */
function renderStep(){
  const story = state.currentStory;
  const stepIdx = state.currentStep;
  const stepType = story.steps[stepIdx];
  const area = $("#stageArea");
  area.innerHTML = "";
  area.scrollTop = 0;

  const dots = $("#progressDots");
  dots.innerHTML = story.steps.map((_,i)=>{
    const on = (state.progress[story.id]||[])[i] ? "on" : "";
    const now = i===stepIdx ? "now" : "";
    return `<span class="dot ${on} ${now}"></span>`;
  }).join("");

  const done = (state.progress[story.id]||[])[stepIdx];
  $("#nextBtn").disabled = !done;
  $("#nextBtn").textContent = stepIdx === 4 ? "完成 ✓" : "下一关 →";

  const renderer = RENDERERS[stepType];
  if(renderer){
    renderer(story, stepIdx);
  } else {
    area.innerHTML = `<div class="q-card"><p class="q-title">题型开发中：${stepType}</p></div>`;
  }
}

/* ============ 八、完成当前关 ============ */
function completeStep(){
  const story = state.currentStory;
  if(!state.progress[story.id]) state.progress[story.id] = [false,false,false,false,false];
  state.progress[story.id][state.currentStep] = true;
  const dots = $("#progressDots");
  dots.innerHTML = story.steps.map((_,i)=>{
    const on = state.progress[story.id][i] ? "on" : "";
    const now = i===state.currentStep ? "now" : "";
    return `<span class="dot ${on} ${now}"></span>`;
  }).join("");
  $("#nextBtn").disabled = false;
  toast("完成这一关！");
}

/* ============ 九、各题型渲染器 ============ */
const RENDERERS = {};

/* --- 1. 时间线拖拽 --- */
RENDERERS.timeline = (story, stepIdx)=>{
  const data = story.data.timeline;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `
    <h3 class="q-title">${data.q}</h3>
    <p class="q-desc">用手指把卡片拖到空位；也可以先点卡片，再点空位</p>
    <div class="drag-pool" id="pool"></div>
    <div class="timeline" id="timeline"></div>
  `;
  area.appendChild(card);

  const pool = card.querySelector("#pool");
  const timeline = card.querySelector("#timeline");

  function buildPool(){
    pool.innerHTML = "";
    shuffle(data.events).forEach(ev=>{
      const chip = document.createElement("div");
      chip.className = "drag-chip";
      chip.textContent = ev;
      chip.dataset.value = ev;
      pool.appendChild(chip);

      makeDraggable(chip, ".timeline-drop", (c, drop)=>{
        drop.textContent = c.dataset.value;
        drop.classList.add("filled");
        drop.dataset.value = c.dataset.value;
        c.remove();
        checkTimeline();
      });

      chip.addEventListener("click", ()=>{
        if(picked) picked.classList.remove("picked");
        picked = chip;
        chip.classList.add("picked");
      });
    });
  }

  data.events.forEach((_,i)=>{
    const row = document.createElement("div");
    row.className = "timeline-slot";
    row.innerHTML = `<div class="timeline-num">${i+1}</div>
      <div class="timeline-drop" data-index="${i}">拖到这里</div>`;
    timeline.appendChild(row);
  });

  let picked = null;
  timeline.addEventListener("click", e=>{
    const drop = e.target.closest(".timeline-drop");
    if(!drop || !picked) return;
    if(drop.classList.contains("filled")) return;
    drop.textContent = picked.dataset.value;
    drop.classList.add("filled");
    drop.dataset.value = picked.dataset.value;
    picked.remove();
    picked = null;
    checkTimeline();
  });

  function checkTimeline(){
    const drops = timeline.querySelectorAll(".timeline-drop");
    if([...drops].some(d=>!d.classList.contains("filled"))) return;
    let ok = true;
    drops.forEach((d,i)=>{
      if(d.dataset.value !== data.events[i]) ok = false;
    });
    if(ok){ completeStep(); }
    else {
      toast("顺序不对，再想想～");
      setTimeout(()=>{
        drops.forEach(d=>{
          d.textContent = "拖到这里";
          d.classList.remove("filled");
          delete d.dataset.value;
        });
        buildPool();
      }, 900);
    }
  }

  buildPool();
};

/* --- 2. 点亮关键句 --- */
RENDERERS.highlight = (story, stepIdx)=>{
  const data = story.data.highlight;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点一下你认为最重要的句子</p>
    <div class="opt-list" id="opts"></div>`;
  area.appendChild(card);
  const opts = card.querySelector("#opts");
  data.sentences.forEach(s=>{
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = s.t;
    btn.onclick = ()=>{
      opts.querySelectorAll(".opt-btn").forEach(b=>b.classList.remove("picked","correct","wrong"));
      btn.classList.add("picked");
      if(s.ok){
        btn.classList.add("correct");
        completeStep();
      } else {
        btn.classList.add("wrong");
        toast("再想想，哪一句最关键？");
      }
    };
    opts.appendChild(btn);
  });
};

/* --- 3. 情绪温度计 --- */
RENDERERS.emotion = (story, stepIdx)=>{
  const data = story.data.emotion;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">拖动小滑块，表示人物此刻的情绪</p>
    <div class="thermo-wrap" id="wrap"></div>`;
  area.appendChild(card);
  const wrap = card.querySelector("#wrap");
  data.moments.forEach((m,i)=>{
    const row = document.createElement("div");
    row.className = "thermo-row";
    row.innerHTML = `<div class="thermo-label">${m}</div>
      <div class="thermo-track" data-i="${i}">
        <div class="thermo-knob" style="left:50%"></div>
      </div>`;
    wrap.appendChild(row);
    const track = row.querySelector(".thermo-track");
    const knob = row.querySelector(".thermo-knob");
    const move = e=>{
      const rect = track.getBoundingClientRect();
      const x = (e.touches?e.touches[0].clientX:e.clientX) - rect.left;
      let p = Math.max(0, Math.min(1, x/rect.width));
      knob.style.left = (p*100)+"%";
    };
    knob.addEventListener("touchstart", e=>{e.preventDefault();move(e);},{passive:false});
    knob.addEventListener("touchmove", e=>{e.preventDefault();move(e);},{passive:false});
    knob.addEventListener("mousedown", e=>{
      move(e);
      const mm = ev=>move(ev);
      const mu = ()=>{document.removeEventListener("mousemove",mm);document.removeEventListener("mouseup",mu);};
      document.addEventListener("mousemove",mm);
      document.addEventListener("mouseup",mu);
    });
  });
  const btn = document.createElement("button");
  btn.className = "next-btn";
  btn.style.marginTop = "20px";
  btn.textContent = "确认情绪";
  btn.onclick = ()=>{ completeStep(); };
  wrap.appendChild(btn);
};

/* --- 4. 分支选择 --- */
RENDERERS.branch = (story, stepIdx)=>{
  const data = story.data.branch;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <div class="opt-list" id="opts"></div>`;
  area.appendChild(card);
  const opts = card.querySelector("#opts");
  data.options.forEach((o,i)=>{
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = o;
    btn.onclick = ()=>{
      opts.querySelectorAll(".opt-btn").forEach(b=>b.classList.remove("picked","correct","wrong"));
      btn.classList.add("picked");
      if(i === data.correct){
        btn.classList.add("correct");
        completeStep();
      } else {
        btn.classList.add("wrong");
        toast("再想想，故事里是怎么说的？");
      }
    };
    opts.appendChild(btn);
  });
};

/* --- 5. 写一句话 --- */
RENDERERS.write = (story, stepIdx)=>{
  const data = story.data.write;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点词卡组合，或直接手写一句</p>
    <div class="word-chips" id="chips"></div>
    <div class="sentence-box" id="box" contenteditable="true"></div>
    <button class="next-btn" id="okBtn" style="margin-top:16px">完成这一关</button>`;
  area.appendChild(card);
  const chips = card.querySelector("#chips");
  const box = card.querySelector("#box");
  data.words.forEach(w=>{
    const c = document.createElement("span");
    c.className = "word-chip";
    c.textContent = w;
    c.onclick = ()=>{
      box.textContent += w;
      c.classList.add("used");
    };
    chips.appendChild(c);
  });
  card.querySelector("#okBtn").onclick = ()=>{
    if(!box.textContent.trim()){ toast("先写一句吧～"); return; }
    completeStep();
  };
};

/* --- 6. 翻卡片 --- */
RENDERERS.flip = (story, stepIdx)=>{
  const data = story.data.flip;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点开卡片，找出正确的证据</p>
    <div class="flip-grid" id="grid"></div>`;
  area.appendChild(card);
  const grid = card.querySelector("#grid");
  let found = 0;
  const totalOk = data.cards.filter(c=>c.ok).length;
  shuffle(data.cards).forEach(c=>{
    const el = document.createElement("div");
    el.className = "flip-card";
    el.innerHTML = `<div class="flip-inner">
      <div class="flip-face flip-front">?</div>
      <div class="flip-face flip-back">${c.t}</div>
    </div>`;
    el.onclick = ()=>{
      if(el.classList.contains("flipped")) return;
      el.classList.add("flipped");
      if(c.ok){
        el.classList.add("found");
        found++;
        if(found === totalOk) completeStep();
      }
    };
    grid.appendChild(el);
  });
};

/* --- 7. 放大镜 --- */
RENDERERS.magnifier = (story, stepIdx)=>{
  const data = story.data.magnifier;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点一下画面里的隐藏细节</p>
    <div class="magnifier-stage" id="stage"></div>`;
  area.appendChild(card);
  const stage = card.querySelector("#stage");
  let found = 0;
  const positions = [
    {l:"12%",t:"20%"},{l:"62%",t:"30%"},{l:"28%",t:"62%"},{l:"72%",t:"68%"},
    {l:"45%",t:"15%"},{l:"15%",t:"75%"}
  ];
  data.dots.forEach((d,i)=>{
    const dot = document.createElement("div");
    dot.className = "hidden-dot";
    dot.style.left = positions[i].l;
    dot.style.top = positions[i].t;
    dot.textContent = "?";
    dot.onclick = ()=>{
      if(dot.classList.contains("found")) return;
      dot.classList.add("found");
      dot.textContent = d;
      found++;
      if(found === data.dots.length) completeStep();
    };
    stage.appendChild(dot);
  });
};

/* --- 8. 拖物品分类 --- */
RENDERERS.classify = (story, stepIdx)=>{
  const data = story.data.classify;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点物品，再点宝箱；也可以直接拖进去</p>
    <div class="drag-pool" id="pool"></div>
    <div class="drop-zone" id="box">宝箱</div>`;
  area.appendChild(card);
  const pool = card.querySelector("#pool");
  const box = card.querySelector("#box");
  const all = shuffle([...data.items, ...data.distractors]);
  let picked = null;

  all.forEach(it=>{
    const chip = document.createElement("div");
    chip.className = "drag-chip";
    chip.textContent = it;
    chip.dataset.value = it;
    pool.appendChild(chip);

    makeDraggable(chip, "#box", (c)=>{
      const v = c.dataset.value;
      if(data.items.includes(v)){
        box.innerHTML += `<span class="drag-chip">${v}</span>`;
        c.remove();
        const left = pool.querySelectorAll(".drag-chip").length;
        if(left === data.distractors.length) completeStep();
      } else {
        toast("这个不属于这个故事哦～");
      }
    });

    chip.addEventListener("click", ()=>{
      if(picked) picked.classList.remove("picked");
      picked = chip;
      chip.classList.add("picked");
    });
  });

  box.onclick = ()=>{
    if(!picked) return;
    const v = picked.dataset.value;
    if(data.items.includes(v)){
      box.innerHTML += `<span class="drag-chip">${v}</span>`;
      picked.remove();
      picked = null;
      const left = pool.querySelectorAll(".drag-chip").length;
      if(left === data.distractors.length) completeStep();
    } else {
      toast("这个不属于这个故事哦～");
    }
  };
};

/* --- 9. 人物卡牌 --- */
RENDERERS.card = (story, stepIdx)=>{
  const data = story.data.card;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">点属性卡，再点人物；也可以直接拖过去</p>
    <div class="drag-pool" id="pool"></div>
    <div class="drop-zone" id="person">人物</div>`;
  area.appendChild(card);
  const pool = card.querySelector("#pool");
  const person = card.querySelector("#person");
  let picked = null;

  shuffle(data.attrs).forEach(a=>{
    const chip = document.createElement("div");
    chip.className = "drag-chip";
    chip.textContent = a;
    pool.appendChild(chip);

    makeDraggable(chip, "#person", (c)=>{
      person.innerHTML += `<span class="drag-chip">${c.textContent}</span>`;
      c.remove();
      if(pool.querySelectorAll(".drag-chip").length === 0) completeStep();
    });

    chip.addEventListener("click", ()=>{
      if(picked) picked.classList.remove("picked");
      picked = chip;
      chip.classList.add("picked");
    });
  });

  person.onclick = ()=>{
    if(!picked) return;
    person.innerHTML += `<span class="drag-chip">${picked.textContent}</span>`;
    picked.remove();
    picked = null;
    if(pool.querySelectorAll(".drag-chip").length === 0) completeStep();
  };
};

/* --- 10. 连线 --- */
RENDERERS.match = (story, stepIdx)=>{
  const data = story.data.match;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">先点左边，再点右边</p>
    <div class="match-wrap">
      <div class="match-col" id="left"></div>
      <div class="match-col" id="right"></div>
    </div>`;
  area.appendChild(card);
  const left = card.querySelector("#left");
  const right = card.querySelector("#right");
  const rightShuffled = shuffle(data.right);
  data.left.forEach(t=>{
    const el = document.createElement("div");
    el.className = "match-item";
    el.textContent = t;
    el.dataset.side = "left";
    left.appendChild(el);
  });
  rightShuffled.forEach(t=>{
    const el = document.createElement("div");
    el.className = "match-item";
    el.textContent = t;
    el.dataset.side = "right";
    right.appendChild(el);
  });
  let selLeft = null;
  let matched = 0;
  const onClick = e=>{
    const el = e.target.closest(".match-item");
    if(!el || el.classList.contains("linked")) return;
    if(el.dataset.side === "left"){
      if(selLeft) selLeft.classList.remove("selected");
      selLeft = el;
      el.classList.add("selected");
    } else {
      if(!selLeft) return;
      const li = data.left.indexOf(selLeft.textContent);
      const ri = data.right.indexOf(el.textContent);
      if(li === ri){
        selLeft.classList.remove("selected");
        selLeft.classList.add("linked");
        el.classList.add("linked");
        matched++;
        selLeft = null;
        if(matched === data.left.length) completeStep();
      } else {
        toast("再想想，这两个对应吗？");
        selLeft.classList.remove("selected");
        selLeft = null;
      }
    }
  };
  left.onclick = onClick;
  right.onclick = onClick;
};

/* --- 11. 投票站 --- */
RENDERERS.vote = (story, stepIdx)=>{
  const data = story.data.vote;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">选一个你的看法，然后写一句理由</p>
    <div class="vote-list" id="votes"></div>
    <div class="sentence-box" id="reason" contenteditable="true"></div>
    <button class="next-btn" id="okBtn" style="margin-top:16px">完成这一关</button>`;
  area.appendChild(card);
  const votes = card.querySelector("#votes");
  let picked = null;
  data.options.forEach(o=>{
    const btn = document.createElement("button");
    btn.className = "vote-btn";
    btn.textContent = o;
    btn.onclick = ()=>{
      votes.querySelectorAll(".vote-btn").forEach(b=>b.classList.remove("picked"));
      btn.classList.add("picked");
      picked = o;
    };
    votes.appendChild(btn);
  });
  card.querySelector("#okBtn").onclick = ()=>{
    if(!picked){ toast("先选一个看法～"); return; }
    const reason = card.querySelector("#reason").textContent.trim();
    if(!reason){ toast("再写一句为什么～"); return; }
    completeStep();
  };
};

/* --- 12. 录音 --- */
RENDERERS.record = (story, stepIdx)=>{
  const data = story.data.record;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">${data.prompt}</p>
    <div class="record-wrap">
      <button class="record-btn" id="recBtn">按住录音</button>
      <div id="audioBox"></div>
    </div>`;
  area.appendChild(card);

  const btn = card.querySelector("#recBtn");
  const audioBox = card.querySelector("#audioBox");
  let mediaRecorder = null;
  let chunks = [];
  let stream = null;

  async function startRec(){
    try{
      stream = await navigator.mediaDevices.getUserMedia({audio:true});
      const mime = MediaRecorder.isTypeSupported("audio/mp4") ? "audio/mp4" : "";
      mediaRecorder = mime ? new MediaRecorder(stream,{mimeType:mime}) : new MediaRecorder(stream);
      chunks = [];
      mediaRecorder.ondataavailable = e=>{ if(e.data.size>0) chunks.push(e.data); };
      mediaRecorder.onstop = async ()=>{
        const blob = new Blob(chunks,{type: mediaRecorder.mimeType || "audio/mp4"});
        const url = URL.createObjectURL(blob);
        audioBox.innerHTML = `<div class="audio-bubble">
          <span class="star">⭐</span>
          <button class="play-btn" id="playBtn">▶</button>
          <span>你的录音</span>
        </div>`;
        audioBox.querySelector("#playBtn").onclick = ()=>{
          const a = new Audio(url);
          a.play();
        };
        await saveAudio(story.id, stepIdx, blob);
        completeStep();
      };
      mediaRecorder.start();
      btn.classList.add("recording");
      btn.textContent = "松开发送";
    }catch(err){
      toast("无法访问麦克风，请允许权限");
    }
  }

  function stopRec(){
    if(mediaRecorder && mediaRecorder.state === "recording"){
      mediaRecorder.stop();
      btn.classList.remove("recording");
      btn.textContent = "按住录音";
      if(stream) stream.getTracks().forEach(t=>t.stop());
    }
  }

  btn.addEventListener("touchstart", e=>{e.preventDefault();startRec();},{passive:false});
  btn.addEventListener("touchend", e=>{e.preventDefault();stopRec();},{passive:false});
  btn.addEventListener("mousedown", startRec);
  btn.addEventListener("mouseup", stopRec);
  btn.addEventListener("mouseleave", stopRec);
};

/* --- 13. 画画 --- */
RENDERERS.draw = (story, stepIdx)=>{
  const data = story.data.draw;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">用手指画一画</p>
    <div class="color-row" id="colors"></div>
    <canvas class="draw-stage" id="canvas"></canvas>
    <button class="next-btn" id="okBtn" style="margin-top:16px">完成这一关</button>`;
  area.appendChild(card);

  const colors = ["#3b2f2f","#c96b6b","#c9a227","#7d9b76","#7fa8b8","#9b8bb4"];
  const colorRow = card.querySelector("#colors");
  let curColor = colors[0];
  colors.forEach((c,i)=>{
    const d = document.createElement("div");
    d.className = "color-dot" + (i===0?" picked":"");
    d.style.background = c;
    d.onclick = ()=>{
      colorRow.querySelectorAll(".color-dot").forEach(x=>x.classList.remove("picked"));
      d.classList.add("picked");
      curColor = c;
    };
    colorRow.appendChild(d);
  });

  const canvas = card.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2,2);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
  }
  setTimeout(resize, 50);
  let drawing = false;
  function pos(e){
    const rect = canvas.getBoundingClientRect();
    const t = e.touches?e.touches[0]:e;
    return {x:t.clientX-rect.left, y:t.clientY-rect.top};
  }
  canvas.addEventListener("touchstart", e=>{e.preventDefault();drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
  canvas.addEventListener("touchmove", e=>{e.preventDefault();if(!drawing)return;const p=pos(e);ctx.strokeStyle=curColor;ctx.lineTo(p.x,p.y);ctx.stroke();},{passive:false});
  canvas.addEventListener("touchend", e=>{e.preventDefault();drawing=false;},{passive:false});
  canvas.addEventListener("mousedown", e=>{drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});
  canvas.addEventListener("mousemove", e=>{if(!drawing)return;const p=pos(e);ctx.strokeStyle=curColor;ctx.lineTo(p.x,p.y);ctx.stroke();});
  canvas.addEventListener("mouseup", ()=>{drawing=false;});

  card.querySelector("#okBtn").onclick = ()=>completeStep();
};

/* --- 14. 排序 --- */
RENDERERS.order = (story, stepIdx)=>{
  const data = story.data.order;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">用手指把句子拖到空位；也可以先点句子，再点空位</p>
    <div class="drag-pool" id="pool"></div>
    <div class="timeline" id="timeline"></div>`;
  area.appendChild(card);
  const pool = card.querySelector("#pool");
  const timeline = card.querySelector("#timeline");
  let picked = null;

  function buildPool(){
    pool.innerHTML = "";
    shuffle(data.events).forEach(ev=>{
      const chip = document.createElement("div");
      chip.className = "drag-chip";
      chip.textContent = ev;
      chip.dataset.value = ev;
      pool.appendChild(chip);

      makeDraggable(chip, ".timeline-drop", (c, drop)=>{
        drop.textContent = c.dataset.value;
        drop.classList.add("filled");
        drop.dataset.value = c.dataset.value;
        c.remove();
        checkOrder();
      });

      chip.addEventListener("click", ()=>{
        if(picked) picked.classList.remove("picked");
        picked = chip;
        chip.classList.add("picked");
      });
    });
  }

  data.events.forEach((_,i)=>{
    const row = document.createElement("div");
    row.className = "timeline-slot";
    row.innerHTML = `<div class="timeline-num">${i+1}</div>
      <div class="timeline-drop" data-index="${i}">点这里放置</div>`;
    timeline.appendChild(row);
  });

  timeline.addEventListener("click", e=>{
    const drop = e.target.closest(".timeline-drop");
    if(!drop || !picked) return;
    if(drop.classList.contains("filled")) return;
    drop.textContent = picked.dataset.value;
    drop.classList.add("filled");
    drop.dataset.value = picked.dataset.value;
    picked.remove();
    picked = null;
    checkOrder();
  });

  function checkOrder(){
    const drops = timeline.querySelectorAll(".timeline-drop");
    if([...drops].some(d=>!d.classList.contains("filled"))) return;
    let ok = true;
    drops.forEach((d,i)=>{ if(d.dataset.value !== data.events[i]) ok=false; });
    if(ok) completeStep();
    else {
      toast("顺序不对，再试试～");
      setTimeout(()=>{
        drops.forEach(d=>{d.textContent="点这里放置";d.classList.remove("filled");delete d.dataset.value;});
        buildPool();
      }, 900);
    }
  }

  buildPool();
};

/* --- 15. 找“不属于” --- */
RENDERERS.odd = (story, stepIdx)=>{
  const data = story.data.odd;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <div class="drag-pool" id="pool"></div>`;
  area.appendChild(card);
  const pool = card.querySelector("#pool");
  const all = shuffle([...data.items, data.odd]);
  all.forEach(it=>{
    const chip = document.createElement("div");
    chip.className = "drag-chip";
    chip.textContent = it;
    chip.onclick = ()=>{
      if(it === data.odd){
        chip.style.background = "linear-gradient(160deg,#e5f3e0,#cfe8c8)";
        chip.style.borderColor = "#7d9b76";
        completeStep();
      } else {
        chip.style.background = "linear-gradient(160deg,#f7e0e0,#efcaca)";
        toast("这个在故事里出现过哦～");
      }
    };
    pool.appendChild(chip);
  });
};

/* --- 16. 聊天 --- */
RENDERERS.chat = (story, stepIdx)=>{
  const data = story.data.chat;
  const area = $("#stageArea");
  const card = document.createElement("div");
  card.className = "q-card";
  card.innerHTML = `<h3 class="q-title">${data.q}</h3>
    <p class="q-desc">你问：${data.prompt}</p>
    <div id="chatBox" style="margin:14px 0;min-height:60px"></div>
    <button class="next-btn" id="okBtn">发送</button>`;
  area.appendChild(card);
  card.querySelector("#okBtn").onclick = ()=>{
    const box = card.querySelector("#chatBox");
    if(box.dataset.done) return;
    box.innerHTML = `<div class="audio-bubble" style="justify-content:flex-start">
      <span class="star">👑</span><span>${data.reply}</span>
    </div>`;
    box.dataset.done = "1";
    completeStep();
  };
};

/* ============ 十、IndexedDB 保存录音 ============ */
function openDB(){
  return new Promise((res,rej)=>{
    const req = indexedDB.open("andersen",1);
    req.onupgradeneeded = e=>{
      const db = e.target.result;
      if(!db.objectStoreNames.contains("audio")){
        db.createObjectStore("audio",{keyPath:"key"});
      }
    };
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}
async function saveAudio(storyId, stepIdx, blob){
  try{
    const db = await openDB();
    const tx = db.transaction("audio","readwrite");
    tx.objectStore("audio").put({key:`${storyId}_${stepIdx}`, blob, time:Date.now()});
  }catch(e){ console.warn("保存录音失败", e); }
}

/* ============ 十一、事件绑定 ============ */
$("#backBtn").onclick = ()=>{
  showScreen("mapScreen");
  renderMap();
};

$("#nextBtn").onclick = ()=>{
  const story = state.currentStory;
  if(state.currentStep < 4){
    state.currentStep++;
    renderStep();
  } else {
    showEnd();
  }
};

$("#retryBtn").onclick = ()=>{
  renderStep();
  toast("可以再答一次～");
};

$("#endBackBtn").onclick = ()=>{
  showScreen("mapScreen");
  renderMap();
};

function showEnd(){
  const story = state.currentStory;
  $("#endTitle").textContent = `《${story.name}》完成！`;
  $("#endBadges").innerHTML = "🪶 💧 ⭐ 🌱 🌸";
  $("#endText").textContent = "你收集到了这一座小岛上的五种童话元素。回到地图，继续点亮下一座吧。";
  showScreen("endScreen");
}

/* ============ 十二、启动 ============ */
renderMap();