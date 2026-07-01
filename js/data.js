/**
 * TM PrimePress Single EOM - 完整文档数据
 * 安德里茨 PrimePress 压榨部操作与维护说明书
 * 中文-英文双语 · 结构化 JSON
 *
 * 添加内容：按现有格式新增条目即可
 */

const APP_DATA = {

  // =============================================================
  // 1. 技术参数 Technical Data
  // =============================================================
  technicalData: {
    title: "技术参数 Technical Data",
    route: "tech-data",
    sections: [
      {
        title: "📊 网部数据 Wire Section",
        type: "data-table",
        rows: [
          { label: "流浆箱宽度 Pond width", value: "3596 mm" },
          { label: "最大工作速度 Max. operating speed", value: "1650 m/min" },
          { label: "网最大张力 Max. wire tension", value: "10 N/mm" },
          { label: "网宽 Wire width", value: "3541 mm" },
          { label: "网长度 Wire length", value: "14000 mm" }
        ]
      },
      {
        title: "📊 毛毯数据 Felt Data",
        type: "data-table",
        rows: [
          { label: "最大毛毯张力 Max. felt tension", value: "6 N/mm" },
          { label: "毛毯宽 Felt width", value: "3800 mm" },
          { label: "毛毯长度 Felt length", value: "36000 mm" }
        ]
      },
      {
        title: "📊 真空压榨辊 Suction Press Roll",
        type: "data-table",
        rows: [
          { label: "直径 Diameter", value: "1410 mm" },
          { label: "真空区数量 Number of suction zones", value: "1" },
          { label: "线压（设计）Line force (design)", value: "110 N/mm" },
          { label: "包胶 Cover", value: "PU" },
          { label: "硬度 Hardness P&J", value: "14 ± 3" },
          { label: "厚度 Thickness", value: "20 mm" }
        ]
      },
      {
        title: "📊 中高曲线 Cambering Curve",
        type: "text",
        content: `<p style="font-size:0.85rem;color:var(--color-text-secondary)">详见下图 / See figure below</p>`,
        image: "images/page04-img02.jpeg",
        imageCaption: "Fig. 1: Suction press roll – cambering curve / 图1：真空压榨辊-中高曲线"
      }
    ],
    note: "数据来源 / Data source: ANDRITZ AG, Rev. 0, 2026"
  },

  // =============================================================
  // 2. 设备描述 Description
  // =============================================================
  components: {
    title: "设备描述 Description",
    route: "components",

    // 应用领域
    application: {
      title: "应用领域 Field of Application",
      cn: "压榨部用于对纸幅的偏转、脱水，并将其压到扬克缸上。",
      en: "The press section is used to deflect, dewater, and press the paper web onto the yankee.",
      image: "images/page05-img02.jpeg",
      imageCaption: "Fig. 2: Press section / 图2：压榨部"
    },

    // 主要部件总览
    overview: {
      title: "主要部件 Main Components",
      image: "images/page06-img02.jpeg",
      imageCaption: "Fig. 3: Main components of the press section / 图3：压榨部主要部件",
      items: [
        { num: 1, name: "真空压榨辊 Suction press roll", route: "component-detail?id=suction-press-roll" },
        { num: 2, name: "扬克缸 Yankee", route: "component-detail?id=yankee" },
        { num: 3, name: "集水盘 Water collecting tray", route: "component-detail?id=water-tray" },
        { num: 4, name: "真空压榨辊的压力加载装置 Pressure loading device", route: "component-detail?id=pressure-device" },
        { num: 5, name: "悬吊装置 Suspension device", route: "component-detail?id=suspension-device" },
        { num: 6, name: "拆除车 Run-out carriage", route: "component-detail?id=runout-carriage" }
      ]
    },

    // 技术描述
    techDescription: {
      title: "技术描述 Technological Description",
      cn: "压榨部用于将纸浆偏转、脱水以及压到扬克缸上。",
      en: "The press section is used to deflect, dewater and press the web onto the Yankee."
    },

    // 真空压榨辊功能
    suctionRollFunction: {
      title: "真空压榨辊的作用 Function of the Suction Press Roll",
      cn: "真空压榨辊将粘在毛毯外侧的纸浆压在扬克缸上。纸浆是通过压力和真空，保持在扬克缸上。扬克缸会提前喷上一层涂层。",
      en: "The suction press roll presses the pulp web adhering to the outer side of the felt onto the Yankee. The pulp web is held on the Yankee by means of pressure and vacuum. The Yankee is sprayed beforehand with a coating layer.",
      subsections: [
        {
          title: "脱水 Dewatering",
          cn: "在压榨区内，通过真空将毛毯和纸浆中的水通过辊壳上的钻孔吸入。在真空区后，在离心力的作用下，水喷飞溅进集水盘内，并将其带走。",
          en: "In the suction zone, the water in the felt and the web is sucked through the bore holes in the roll shell by means of vacuum. After the suction zone, the water is sprayed by centrifugal force into the water collecting tray and carried off."
        },
        {
          title: "密封和润滑 Sealing and Lubricating",
          cn: "真空部由纵向和横向密封条分隔。密封条通过气动方式，压在辊壳的内壁上，并通过润滑水喷淋器进行润滑。",
          en: "The vacuum sector is delimited by longitudinal and transverse sealing strips. The sealing strips are pressed pneumatically onto the inside wall of the roll shell and lubricated with water by a lube shower."
        },
        {
          title: "真空箱 Suction Box",
          cn: "整个真空箱可在真空压榨辊内旋转，以设定吸入角。这意味着受密封条限制的真空区的起始位置和终止位置——可以通过旋转整个真空箱来改变。",
          en: "The entire suction box can be rotated inside the suction press roll in order to set the suction angle. This means that the beginning and the end of the suction zone - limited by the sealing strips - can be changed by rotating the entire suction box."
        },
        {
          title: "进一步处理 Further Processing",
          cn: "然后脱水和压榨后的纤维，将以纸的形式附着在扬克缸上开始后续的干燥。",
          en: "The dewatered and pressed fibers now adhering to the Yankee in the form of a web are subsequently dried."
        }
      ]
    },

    // 各部件详情
    componentDetails: {

      // -------- 真空压榨辊 --------
      "suction-press-roll": {
        title: "真空压榨辊 Suction Press Roll (1)",
        description: { cn: "浆板脱水并将其传送到扬克缸处。", en: "Dewatering and transferring the pulp web to the yankee." },
        image: "images/page07-img10.jpeg",
        imageCaption: "Fig. 4: Suction press roll / 图4：真空压榨辊",
        parts: [
          { id: "1a", name: "辊体 Roll shell" },
          { id: "1b", name: "辊筒轴颈 Roll journal" },
          { id: "1c", name: "轴承 Bearings" },
          { id: "1d", name: "真空箱调整 Suction box adjustment" },
          { id: "1e", name: "真空箱 Suction box" },
          { id: "1f", name: "轴承座 Supports" },
          { id: "1g", name: "真空箱管件 Suction box fittings" },
          { id: "1h", name: "密封条 Sealing strips" },
          { id: "1j", name: "真空管道连接件 Suction connection piece" },
          { id: "1k", name: "滑块/移出轮 Sliding blocks / run-out rolls" }
        ],
        subsections: [
          {
            title: "2.2.1.1 辊壳和轴头 Roll Shell (1a) and Roll Journals (1b)",
            cn: "辊壳（1a）设有多个钻孔，在真空的作用下，水通过钻孔从毛毯和纸浆上吸出。开孔面积大约占19.9%。辊壳用螺栓固定到辊子轴头上（1b）。",
            en: "The roll shell (1a) has bore holes through which the water is sucked out of the felt and the pulp web by vacuum. The open surface area is approximately 19.9%. The roll shell is bolted to the roll journals (1b).",
            image: "images/page08-img02.jpeg",
            imageCaption: "Fig. 5: Roll shell / 图5：辊体"
          },
          {
            title: "2.2.1.2 轴承 Bearing (1c)",
            cn: "轴承座和带圆锥轴承座的自动调心滚珠轴承。在操作侧，轴承被设计成可动轴承，而在驱动侧，它们被设计成固定轴承。辊子的轴承由中央油润滑系统润滑，并用迷宫环密封。吸水压榨辊是通过支撑物拧到压榨杠杆上的。",
            en: "Bearing housings and spherical roller bearings with tapered seats. On the operating side, the bearings are designed as floating bearings, while on the drive side, they are designed as fixed bearings. The bearings of the rolls are automatically lubricated by the central oil lubrication system and sealed with labyrinth rings. The suction press roll is screwed to the pressing levers by means of the supports.",
            image: "images/page08-img04.jpeg",
            imageCaption: "Fig. 6: Drive side and operator side bearing / 图6：传动侧和操作侧轴承"
          },
          {
            title: "2.2.1.3 真空箱调整 Suction Box Adjustment (1d)",
            cn: "真空箱可绕其纵轴心旋转。使用蜗杆传动装置调整所需的位置。蜗杆传动装置利用提供的插在方颈处棘轮操作。真空箱的位置可以从刻度上读出。",
            en: "The suction box can be pivoted round its longitudinal axis. The desired position is set using a worm drive. The worm drive is operated with the ratchet supplied, inserted at the square neck. The position of the suction box can be read off a scale.",
            image: "images/page09-img02.jpeg",
            imageCaption: "Fig. 7: Suction box adjustment (example) / 图7：真空箱调整（例子）"
          },
          {
            title: "2.2.1.4 带密封带的真空箱 Suction Box (1e) with Sealing Strips (1h)",
            cn: "真空箱（1e）位于辊壳（1a）内。真空区用纵向密封条（1h1）和边缘密封条（1h2）密封。密封条通过空气软管（1h3），被气压压在辊体上，并用润滑喷淋管（1h4）供应的水进行润滑。移出轮（1k）安装在真空箱处，以便将真空箱从辊壳中移出。",
            en: "The suction box (1e) is located in the roll shell (1a). The suction zone is sealed off with longitudinal sealing strips (1h1) and edge sealing strips (1h2). The sealing strips are pressed pneumatically onto the roll shell by means of an air hose (1h3) and lubricated with water supplied through lubricating showers (1h4). Run-out rolls (1k) are mounted at the suction box in order to run the suction box out of the roll shell.",
            image: "images/page09-img03.jpeg",
            imageCaption: "Fig. 8: Suction box with sealing strips (example) / 图8：带密封带的真空箱（例子）"
          },
          {
            title: "2.2.1.5 真空箱管件 Suction Box Fittings (1g)",
            cn: "操作侧的真空箱管件包含真空显示、压缩空气显示、润滑水接口、密封条用压缩空气管线、真空箱角度显示和移出轮位置显示。",
            en: "The suction box fittings on the operator side include vacuum display, compressed air display, lubricating water connection, compressed air line for sealing strips, suction box angle display, and run-out rolls display.",
            image: "images/page10-img02.jpeg",
            imageCaption: "Fig. 9: Suction box fittings - operator side / 图9：真空箱管件-操作侧"
          },
          {
            title: "2.2.1.6 真空连接件 Suction Connection Piece (1j)",
            cn: "通过真空管道连接件施加真空，水在抽真空时带走。",
            en: "The vacuum is applied through the suction connection piece and the water extracted by suction is carried off.",
            image: "images/page11-img02.jpeg",
            imageCaption: "Fig. 10: Suction connection piece / 图10：真空连接件"
          }
        ]
      },

      // -------- 扬克缸 --------
      "yankee": {
        title: "扬克缸 Yankee (2)",
        description: {
          cn: "扬克缸接收从真空压榨辊来的纸浆。详见干燥部文档。",
          en: "The Yankee receives the pulp web from the suction press roll. See TISSUE MACHINE/DRYING SECTION."
        }
      },

      // -------- 集水盘 --------
      "water-tray": {
        title: "集水盘 Water Collecting Tray (3)",
        function: { cn: "收集并带走抽真空带来的喷淋水。", en: "Collecting and carrying off the shower water removed by suction." },
        design: {
          cn: "焊接钢结构。在顶部边缘安装两个挡水条（3a），用来挡喷水，使来自真空压榨辊的水在离心力的作用下，通过钻孔流出，进入集水盘。在集水盘内设有两个刮刀（3b），用于持续清洁真空压榨辊的外壳。收集到的水在传动侧和操作侧连续排出。",
          en: "Welded steel structure. Two strip (3a) is mounted at the top edge that deflects the water jet, exiting from the suction press roll through the bore holes due to the centrifugal force, into the water collecting tray. Inside the water collecting tray there is two doctors (3b) that cleans the shell of the suction press roll continuously. The water collected is drained off continuously on the drive side and operator side."
        },
        image: "images/page12-img02.jpeg",
        imageCaption: "Fig. 11: Water collecting tray / 图11：集水盘"
      },

      // -------- 压力加载装置 --------
      "pressure-device": {
        title: "真空压榨辊的压力加载装置 Pressure Loading Device (4)",
        function: { cn: "将真空压榨辊压到扬克缸上。", en: "Pressing the suction press roll onto the Yankee." },
        design: {
          cn: "支承在枢轴轴承上的两个压臂（4a）是通过气囊（4b）抬起和降低，在压臂上安装真空压榨辊（1）。在操作侧，有些间隔装置（4c）在毛毯更换时必须拆除。在维护工作中，可通过固定销（4d）使真空压榨辊固定在安全位置。",
          en: "Two pressing levers (4a) supported in pivot bearings, on which the suction press roll (1) is mounted, are raised and lowered by air bellow (4b). On the operator side there are spacers (4c) that have to be removed for felt changing. During maintenance work the position of the suction press roll can be secured by means of retention pins (4d)."
        },
        image: "images/page13-img02.jpeg",
        imageCaption: "Fig. 12: Pressure loading device / 图12：真空压榨辊的压力加载装置"
      },

      // -------- 悬吊装置 --------
      "suspension-device": {
        title: "悬吊装置 Suspension Device (5)",
        function: { cn: "悬吊装置用于拆除和安装真空压榨辊和集水盘以及在更换毛毯时，升起真空压榨辊。", en: "The suspension device is used to dismount and mount the suction press roll and the water collecting tray, as well as to raise the suction press roll during felt changing." },
        design: {
          cn: "两个不锈钢轨道（5a）分别安装机架的在操作侧和传动侧。每条钢轨安装有一台小车（5b）。在维修工作中，每台小车安装一台链式提升机。",
          en: "Two stainless rails (5a), mounted on the operator and drive sides respectively, at the frame. A trolley (5b) is mounted for each rail. During maintenance work one chain hoist is mounted per trolley."
        },
        image: "images/page14-img02.jpeg",
        imageCaption: "Fig. 13: Suspension device / 图13：真空压榨辊的悬吊装置"
      },

      // -------- 拆除车 --------
      "runout-carriage": {
        title: "拆除车 Run-out Carriage (6)",
        function: { cn: "拆除集水盘和真空压榨辊。", en: "Running out the water collecting tray and the suction press roll." },
        design: {
          cn: "在机器下面安装一条钢轨（6a）。在操作侧，在拆除工作期间，增加一条钢轨（6b）。两个拆除车（6c）通过连杆（6d）连接。",
          en: "A rail (6a) is mounted underneath the machine. On the operator side, an additional rail (6b) is attached during removal work. The two run-out carriages (6c) are linked by a connecting rod (6d)."
        },
        image: "images/page15-img03.jpeg",
        imageCaption: "Fig. 14: Run-out carriage with suction press roll / 图14：带真空压榨辊的拆除车"
      }
    }
  },

  // =============================================================
  // 3. 维护 Maintenance
  // =============================================================
  maintenance: {
    title: "维护 Maintenance",
    route: "maintenance",

    // 维护主题列表
    topics: {
      "general": {
        icon: "📋",
        title: "总则 General",
        subtitle: "维护责任、服务联系方式",
        content: {
          cn: "本章对由运营公司负责的维护和保养作了描述。安德里茨有限公司服务部负责帮助您进行故障排除以及各种维护和维修工作。",
          en: "This chapter describes the maintenance and upkeep, which are the responsibility of the operating company. The ANDRITZ service department is at your disposal for troubleshooting, as well as for extensive maintenance and repair work."
        }
      },
      "safety": {
        icon: "⚠️",
        title: "安全条例 Safety Regulations",
        subtitle: "作业安全规定与个人防护",
        notes: [
          { cn: "应当遵守各项事故预防规定。", en: "All applicable accident prevention rules must be observed." },
          { cn: "当规划车间布局时，必须包括足够的维护作业空间。", en: "Sufficient space for maintenance work must be included right away in the arrangement planning." },
          { cn: "不要超过起重机和钢丝绳/吊具允许的起重载荷和重量。固定载荷，防止其从高处坠落。", en: "Do not exceed permissible crane loads and weights on lifting gear and ropes/shackles. Secure loads against falling from a height." },
          { cn: "不要在悬吊的负荷下走动！站在悬吊的负荷下是非常危险的，因而严格禁止！", en: "Do not step or walk below suspended loads! Standing below suspended loads can be fatal and is thus strictly forbidden!" },
          { cn: "进行任何维护作业前，必须将设备清空，并彻底清洁。", en: "The machine must be thoroughly cleaned before carrying out any maintenance work." },
          { cn: "只能在设备安全停机之后实施维护、保养作业。", en: "Maintenance and service work may only be performed when the machine is shut down securely." },
          { cn: "维修工作完成后，必须重新安装所有必需的安全装置。", en: "After completion of maintenance work, all required safety devices must be mounted again." },
          { cn: "在开始任何维护和服务作业前，必须安全断开所有驱动机的能源供应。", en: "The energy supply to all drives must be disconnected securely before beginning any maintenance and service work." },
          { cn: "运营公司应确保在服务和维修工作期间，提供足够的照明（超低电压灯泡）。", en: "The operating company shall ensure that adequate lighting is provided (with extra-low voltage bulbs) during service and maintenance work." },
          { cn: "维修和保养必须由受过专门训练的熟练人员来完成。电气设备的所有作业毫无例外，必须由熟练的电工进行。", en: "Maintenance and service work must be carried out by specially trained, skilled personnel only. All work on the electrical equipment, without exception, must be carried out by skilled electricians." },
          { cn: "作业时必须穿戴个人安全装备。", en: "Personal safety equipment must be worn when working." },
          { cn: "通常情况下，只有在咨询安德里茨有限公司后，才能批准焊接作业。焊接作业应当遵守相关的安全条例。", en: "In general, welding work is only permitted after consulting ANDRITZ. The relevant safety regulations must be observed for welding work." }
        ],
        alerts: [
          { type: "warning", title: "喷淋器 Showers", content: "从喷淋器溅出的液体。穿戴个人防护装备！切勿将手伸进这些设备！<br><small>Liquids splashing out of the showers. Wear your personal protective equipment! Do not put your hand into the machine!</small>" },
          { type: "warning", title: "刮刀维护 Doctor Maintenance", content: "夹持、受伤的危险。伸缩式刮刀和刮刀梁有可能夹持、切割肢体。开始维护作业之前，通过手动阀门切断气源！<br><small>Crushing and cuts on parts of the body when engaging retractable doctors and doctor beams. Before performing any maintenance work, shut off the air supply using the manual valve!</small>" },
          { type: "warning", title: "刮刀片 Doctor Blades", content: "刮刀片割伤。更换刀片期间有受伤的风险。当改变或设定刮刀片时应当佩戴防切割手套！<br><small>Cuts caused by the doctor blades. Risk of injury when changing the blade. Wear cut-resistant gloves when changing or setting the doctor blades!</small>" }
        ]
      },
      "routine-checks": {
        icon: "✅",
        title: "日常检查 Routine Checks",
        subtitle: "设备停机后的检查项目",
        table: {
          headers: ["组件 Component", "检查 Checks", "措施 Action"],
          rows: [
            ["毛毯 Felt", "检查裂纹、孔洞、起皱迹象。检查毛毯位置。<br>Check for cracks, holes, signs of wrinkling. Check felt position.", "必要时更换<br>Replace if necessary."],
            ["毛毯张紧装置<br>Felt tensioning device", "检查其工作<br>Check functioning.", "—"],
            ["刮刀片 Doctor blades", "检查是否出现磨损。清洁接触表面。<br>Check for wear. Clean contact surfaces.", "调平或必要时更换<br>Level off or replace if necessary."],
            ["真空接头 Vacuum connections", "检查泄漏<br>Check for leaks.", "—"],
            ["液压缸 Hydraulic cylinder", "检查泄漏<br>Check for leaks.", "—"],
            ["辊 Rolls", "检查是否发生损坏<br>Check for damage.", "重新研磨或必要时更换<br>Regrind or replace if necessary."],
            ["真空压榨辊外壳钻孔<br>Drill holes in shell", "按需要进行清洁<br>Clean as required.", "—"],
            ["真空箱密封件<br>Suction box seals", "按需要重新调整<br>Re-adjust as required.", "—"]
          ]
        }
      },
      "maintenance-schedule": {
        icon: "📅",
        title: "维护计划 Maintenance Schedule",
        subtitle: "每周/每月/每半年/每年维护任务",
        sections: [
          {
            title: "每周 Weekly",
            table: {
              headers: ["组件 Component", "活动 Activity"],
              rows: [
                ["毛毯 Felt", "检查裂纹、孔洞和起皱迹象。<br>Check for cracks, holes, signs of wrinkling."],
                ["辊 Rolls", "检查是否发生损坏。<br>Check for damage."],
                ["刮刀片 Doctor blades", "检查磨损。<br>Check for wear."],
                ["真空系统 Vacuum system", "检查泄漏。<br>Check for leaks."]
              ]
            }
          },
          {
            title: "每月 Monthly",
            table: {
              headers: ["组件 Component", "活动 Activity"],
              rows: [
                ["轴承 Bearings", "检查温度。测量振动。检查异常噪音。<br>Check temperature. Measure vibrations. Check for unusual noises."],
                ["紧急停机开关<br>EMERGENCY STOP switch", "检查功能。<br>Check function."],
                ["真空压榨辊的辊罩<br>Roll cover of suction press roll", "目视检查裂纹和磨损。<br>Visual check for cracks and wear."]
              ]
            }
          },
          {
            title: "每6个月 Six-monthly",
            table: {
              headers: ["组件 Component", "活动 Activity"],
              rows: [
                ["液压缸 Hydraulic cylinder", "检查泄漏。检查磨损。检查功能。<br>Check for leaks. Check for wear. Check functioning."],
                ["螺旋/螺栓 Screws/bolts", "检查并拧紧。<br>Check and tighten."]
              ]
            }
          },
          {
            title: "每年 Annually",
            table: {
              headers: ["组件 Component", "活动 Activity"],
              rows: [
                ["真空箱 Suction box", "拆卸和清洁。<br>Disassemble and clean."],
                ["真空压榨辊的辊罩<br>Roll cover of suction press roll", "重新研磨（按需要）。<br>Regrind (as required)."]
              ]
            }
          }
        ]
      },
      "fasteners": {
        icon: "🔩",
        title: "紧固件 Fasteners",
        subtitle: "扭矩数据与螺栓规范",
        content: {
          cn: "安装数据适用于设备上的标准螺纹/螺栓连接，应仅在组装图中没有说明特殊的安装数据时才能使用！",
          en: "The installation data apply to standard screwed/bolted connections at the machine and should only be used if no special installation data are stated in the assembly drawings!"
        },
        table: {
          headers: ["螺纹", "强度等级 5.6", "强度等级 8.8", "A4-50", "A4-70", "A4-80", "C3-80"],
          rows: [
            ["M8", "8 Nm", "17 Nm", "6 Nm", "12 Nm", "16 Nm", "17 Nm"],
            ["M10", "16 Nm", "34 Nm", "11 Nm", "24 Nm", "32 Nm", "34 Nm"],
            ["M12", "27 Nm", "58 Nm", "19 Nm", "41 Nm", "54 Nm", "58 Nm"],
            ["M16", "66 Nm", "140 Nm", "46 Nm", "99 Nm", "132 Nm", "140 Nm"],
            ["M20", "129 Nm", "275 Nm", "90 Nm", "193 Nm", "258 Nm", "275 Nm"],
            ["M24", "222 Nm", "474 Nm", "156 Nm", "333 Nm", "444 Nm", "474 Nm"],
            ["M30", "443 Nm", "945 Nm", "310 Nm", "443 Nm", "—", "945 Nm"],
            ["M36", "767 Nm", "1637 Nm", "537 Nm", "767 Nm", "—", "1637 Nm"],
            ["M42", "1223 Nm", "2609 Nm", "—", "—", "—", "2609 Nm"],
            ["M48", "1841 Nm", "3928 Nm", "—", "—", "—", "3928 Nm"]
          ]
        },
        alerts: [
          { type: "warning", title: "螺钉锁紧不正确", content: "螺钉锁紧不正确可导致机器损坏，因而导致人员的有害状况。必须遵循图纸或表格中给出的安装数值！<br><small>Incorrectly tightened screws may lead to machine damage and thus to hazardous situations for persons. The installation values according to the drawings or the table must be observed!</small>" }
        ],
        footerNote: "损坏或丢失的紧固件只能用相同材料的紧固件代替。只能使用原厂备件。<br><small>Damaged or lost fasteners should only be replaced with fasteners of the same material. Use only original spare parts.</small>"
      },
      "cleaning": {
        icon: "🧹",
        title: "清洁 Cleaning",
        subtitle: "清洁方法与安全注意事项",
        alerts: [
          { type: "danger", title: "化学清洁剂 Chemical Cleaning Agents", content: "错误使用化学清洁剂会导致危险！接触清洁剂有可能导致皮肤破损、烧伤。应当佩戴个人防护装备！应当遵守清洁剂供应商提供的安全条例！" },
          { type: "info", title: "清理不当 Incorrect Cleaning", content: "错误使用清洁剂导致的破坏。只能使用规定的清洁剂！防止设备的电气零件浸水、渗透蒸汽和各种清洁剂！切勿用高压力设备清理涂装表面以免涂层破损、导致腐蚀！" }
        ],
        sections: [
          {
            title: "清洁时间与方法 Time and Method",
            paragraphs: [
              { cn: "设备停机以后，应当彻底清理流浆箱以免物料干结。这样能够防止发酵、滋生细菌。", en: "When the machine is shut down, the headbox must be cleaned thoroughly so that the stock does not dry on. This prevents fermentation processes and bacteriological activity." }
            ]
          },
          {
            title: "清洁作业 Cleaning Work",
            paragraphs: [
              { cn: "用清水和清洁剂冲洗。冲洗整个机器。", en: "Flush out with fresh water and cleaning agent. Flush out the entire machine." }
            ]
          },
          {
            title: "工艺材料 Process Materials",
            paragraphs: [
              { cn: "应当用清水清理设备的各个部件。", en: "Fresh water must be used to clean all parts of the machine." }
            ]
          },
          {
            title: "适用的清洁剂 Suitable Cleaning Agents",
            table: {
              headers: ["清洁剂 Cleaning Agent", "浓度 Concentration", "温度 Temperature"],
              rows: [
                ["HCl (盐酸 hydrochloric acid)", "2-5%", "最高 60°C"],
                ["NaOH (苛性钠 caustic soda)", "2-5%", "最高 60°C"],
                ["硫酸 Sulfamic acid", "0.45%", "最高 60°C"]
              ]
            }
          },
          {
            title: "清洁前活动 Activities Before Cleaning",
            paragraphs: [
              { cn: "停止送料。停机机器/设备。停止送料之后，让水路继续运行15分钟左右，清理系统。", en: "Shut down stock feed. Shut down machine/plant. Leave the water loop running for approximately 15 minutes to clean the system after the stock feed has been shut down." }
            ]
          },
          {
            title: "清洁操作",
            paragraphs: [
              { cn: "彻底清洁毛毯和辊。必须清除毛毯或辊上的任何污垢或残留物。如果长时间停机，必须释放毛毯上的张力。彻底清洗刮刀片。清洁任何堵塞的淋浴喷头。", en: "Thorough cleaning of the felt and the rolls. Any dirt or residue on the felt or rolls must always be removed. The tension on the felt must always be relieved if there is a longer shutdown. Thorough cleaning of the doctor blades. Clean any clogged shower nozzles." }
            ],
            alerts: [
              { type: "danger", title: "接触纤维涂布层", content: "接触纤维涂布层会导致皮肤损伤和化学烧伤。对纤维涂布层过敏的人员不得接触纤维涂层！穿戴个人防护装备！在机器上工作后，洗手并对手进行消毒！" },
              { type: "info", title: "注意！", content: "毛毯和辊上的污垢和残渣会影响纸张的质量。因此在重新启动设备之前，应彻底清洗这些部件。必须穿戴个人防护装备！由于张紧不均匀，可能会损坏毛毯。如果需要长时间停机，必须解除毛毯张力。磨损的刮刀叶片在操作过程中会影响辊定期清洗。及时调平刮刀片或更换。" }
            ]
          },
          {
            title: "冲洗 Flushing Out",
            steps: [
              { label: "步骤 a", cn: "停止送料。", en: "Shut down stock feed." },
              { label: "步骤 b", cn: "如果使用了化学清洁剂：将清洁剂添加到水环路中。", en: "If chemical cleaning agents are used: Add cleaning agent to the water loop." },
              { label: "步骤 c", cn: "打开水环路，冲洗系统15分钟左右。", en: "Open the water loop and flush the system out for approximately 15 minutes." }
            ],
            tips: [
              { type: "info", title: "", content: "清洁剂不应腐蚀塑料，还必须含有抑制真菌或细菌生长的添加剂。必须遵守清洁剂供应商给出的安全条例。应当佩戴个人防护装备！" },
              { type: "danger", title: "", content: "地面上的打开的排水沟。危及生命和肢体危险以及损坏机器或其部件危险。清洗后必须重新覆盖排水沟，以消除任何绊倒或跌倒的危险！" }
            ]
          }
        ]
      },
      "lubrication": {
        icon: "🛢️",
        title: "润滑 Lubrication",
        subtitle: "润滑计划表与润滑点",
        content: {
          cn: "在启动之前，检查所有润滑点（特别是轴承和齿轮）是否都添加了合适的润滑剂。",
          en: "Before start-up, check whether all lubrication points, in particular the bearings and gears, have been filled with the appropriate lubricants."
        },
        image: "images/page28-img02.jpeg",
        imageCaption: "Fig. 15: Lubrication points / 图15：润滑点",
        table: {
          headers: ["项目", "数量", "名称 Designation", "类型 Type", "首次加注", "重新加注", "更换 Change"],
          rows: [
            ["1", "2", "耐磨轴承<br>Anti-friction bearing", "ISO-VG 320", "5 l/min", "—", "—"],
            ["2", "2", "蜗轮轴承<br>Bearing for worm gear", "Mobilith SHC PM460", "—", "2 g / 1200 h", "—"],
            ["3", "2", "压上装置的滑动轴承<br>Plain bearing for press-on device", "Mobilith SHC PM460", "—", "2-4 g / 600 h", "—"]
          ]
        },
        alerts: [
          { type: "info", title: "润滑剂处置", content: "润滑剂处置错误会污染我们的环境。收集漏油，妥善处理，不会造成环境污染！基于蔬菜原材料的润滑油应分开进行收集和处置！" }
        ]
      }
    },

    // 维护操作步骤
    procedures: {
      "change-suction-roll": {
        icon: "🔄",
        title: "更换真空压榨辊 Changing the Suction Press Roll",
        subtitle: "步骤 3.9 · 拆除与安装",
        tools: ["工具 Tools", "提升装置 Lifting devices", "网/绳 Wires, ropes", "辊更换零件 Roll changing parts", "辊 Rolls"],
        alerts: [
          { type: "danger", title: "⚠️ 夹住与辗压", content: "作业中，肢体可能被夹住或辗压。不要将手放在悬吊载荷下方！穿戴个人防护装备！运转部件必须使用支撑杆固定到位或采取等效措施（如放低）。" },
          { type: "danger", title: "⚠️ 作业时坠落", content: "作业时坠落而造成死亡危险。使用稳定的梯子和平台！穿戴个人防护装备！" }
        ],
        notes: [
          { cn: "在开始拆除一个辊之前，所有有关人员必须收到准确说明。", en: "All personnel involved must receive precise instructions before starting to change a roll." },
          { cn: "所有相关装配人员必须收到关于其责任范围和活动的准确说明。", en: "The fitters involved must receive exact instructions as to their sphere of responsibility and their activities." },
          { cn: "更换辊所需的所有工具和辅助设备必须在工作开始前完成检查并准备工作。", en: "All tools and auxiliary equipment needed for roll changing must be checked and kept at the ready before work begins." }
        ],
        sections: [
          {
            title: "3.9.1 拆除真空压榨辊 Removing the Suction Press Roll",
            alerts: [],
            paragraphs: [
              { cn: "机器内无毛毯。机器停机。", en: "There is no felt in the machine. Machine is shut down." }
            ],
            image: "images/page31-img03.jpeg",
            imageCaption: "Fig. 16-17: Starting position for changing / 图16-17：更换真空压榨辊的开始位置",
            steps: [
              { label: "开始位置", cn: "机器内无毛毯。机器停机。", en: "There is no felt in the machine. Machine is shut down." },
              { label: "步骤 b", cn: "将真空压榨辊（1）向下摆动并固定到位（2）。气胎的进水管关闭。", en: "The suction press roll (1) is swung down and secured in place (2). The feed pipes to the air bellow are closed." },
              { label: "步骤 c", cn: "所有到集水盘（3）的接口已拆除。", en: "All connections to the water collecting tray (3) have been removed." },
              { label: "步骤 d", cn: "将两台拆除车（9）放置在机器下面，并使用移动杆连接。", en: "Place the two run-out carriages (9) underneath the machine and connect using the shifting rod." },
              { label: "步骤 e", cn: "将两个顶部安装的附件（A）安装在拆除车上。", en: "Mount the two top-mounted attachments (A) on the run-out carriages." },
              { label: "步骤 f", cn: "用吊具，利用吊耳（5），悬吊其拆卸装置（4）。", en: "Suspend the removing device (4) from the suspension lugs (5) by means of shackles." },
              { label: "步骤 g", cn: "将集水盘的吊带（6）连接到到悬吊装置（7）上。", en: "Attach the suspension straps (6) of the water collecting tray to the suspension device (7)." },
              { label: "步骤 h", cn: "拆下紧固螺钉（8），并将集水盘放置在拆除车（9）上。将集水盘从机架中拉出，并将其从机器中抬出。", en: "Detach the fastening screws (8) and place the water collecting tray on the run-out carriage (9). Pull the water collecting tray out of the frame and lift out of the machine." }
            ]
          },
          {
            title: "安装抗扭装置 Mounting the Anti-torsion Device",
            steps: [
              { label: "步骤 a", cn: "旋转真空压榨辊的外壳，直到固定抗扭装置的孔对齐为止。", en: "Rotate the shell of the suction press roll until the bore holes for securing the anti-torsion device match up." },
              { label: "步骤 b", cn: "在操作侧和传动侧，在辊体和轴承座之间，安装旋转锁（10）。", en: "Mount rotation locks (10) on the operator and drive sides between the roll shell and the bearing housing." }
            ],
            image: "images/page32-img03.jpeg",
            imageCaption: "Fig. 18: Mounting the anti-torsion device / 图18：安装抗扭装置"
          },
          {
            title: "拆除真空压榨辊",
            steps: [
              { label: "步骤 a", cn: "将两个拆除车（9）放置在机器下方，并使用移动杆连接。", en: "Place the two run-out carriages (9) underneath the machine and connect using the shifting rod." },
              { label: "步骤 b", cn: "在传动侧，利用悬吊装置（7）吊带（G），吊起真空压榨辊。", en: "Suspend the suction press roll from the suspension devices (7) with the belt (G) on the drive side." },
              { label: "步骤 c", cn: "在操作侧，利用悬吊装置（7）上钢丝绳（S），吊起真空压榨辊。", en: "Suspend the suction press roll from the suspension devices (7) with the steel rope (S) on the operator side." },
              { label: "步骤 d", cn: "用链式提升机稍微张紧吊带和钢丝绳。", en: "Tension the belt and steel rope slightly with the chain hoists." },
              { label: "步骤 e", cn: "松开支架上的操作侧和传动侧紧固螺旋（11）。", en: "Detach the operator-side and drive-side fastening screws (11) at the supports." },
              { label: "步骤 f", cn: "稍微抬起真空压力辊，并将其推进到拆除车（9）上方的位置上。", en: "Raise the suction press roll slightly and push into position above the run-out carriage (9)." },
              { label: "步骤 g", cn: "降低真空压榨辊，并将其放置在拆除车上。", en: "Lower the suction press roll and place on the run-out carriages." },
              { label: "步骤 h", cn: "将真空压榨辊旋入到拆除车上。", en: "Screw the suction press roll to the run-out carriages." },
              { label: "步骤 i", cn: "拆除钢丝绳和吊带。", en: "Dismount steel rope and belt." },
              { label: "步骤 j", cn: "将真空压榨辊拉出机架，并将其抬出机器。", en: "Pull the suction press roll out of the frame and lift out of the machine." }
            ],
            image: "images/page33-img02.jpeg",
            imageCaption: "Fig. 19: Removing the suction press roll / 图19：拆除真空压榨辊"
          },
          {
            title: "3.9.2 安装真空压榨辊 Installing the Suction Press Roll",
            paragraphs: [
              { cn: "如果想要安装真空压榨辊，按与拆除真空压榨辊相反的顺序执行。", en: "To install the suction press roll, carry out the steps described to remove it in reverse order." }
            ]
          }
        ]
      },

      "change-components": {
        icon: "🔧",
        title: "更换真空压榨辊的部件 Changing Components",
        subtitle: "步骤 3.10 · 蜗轮、真空箱、密封件、轴承",
        alerts: [
          { type: "info", title: "", content: "安德里茨有限公司建议只能在真空压榨辊从机器上拆除时，才能更换部件。此时，真空压榨力辊应放置在辊体上，使得轴承座表面朝下。<br><small>ANDRITZ recommends only changing components when the suction press roll has been removed from the machine.</small>" }
        ],
        sections: [
          {
            title: "将真空箱旋转入拆除位置",
            steps: [
              { label: "步骤 a", cn: "松开蜗杆传动处的螺栓（1）。", en: "Loosen the bolts (1) at the worm drive." },
              { label: "步骤 b", cn: "使用所提供的棘轮，转动真空箱的方颈（2），直到密封条/或移出轮处于拆除位置。当标记（3）处于6点钟位置（P1）时，真空箱处于拆除位置。", en: "Use the ratchet provided to turn the suction box at the square neck (2) until the sliding strips and/or the run-out roll are in the run-out position. The suction box is in the run-out position when the marking (3) is in the 6 o'clock position (P1)." },
              { label: "步骤 c", cn: "通过拧紧螺旋（1），再次将蜗轮锁定在位置上。", en: "Lock the worm gear in position again by tightening the screws (1)." }
            ],
            image: "images/page34-img03.jpeg",
            imageCaption: "Fig. 20: Rotate suction box into removing position / 图20：将真空箱旋转到拆除位置"
          }
        ],
        children: [
          { icon: "⚙️", title: "3.10.1 更换蜗轮 Changing the Worm Gear", route: "maintenance-detail?id=change-worm-gear" },
          { icon: "📦", title: "3.10.2 拆除真空箱 Dismounting the Suction Box", route: "maintenance-detail?id=dismount-suction-box" },
          { icon: "📥", title: "3.10.3 装入真空箱 Running the Suction Box In", route: "maintenance-detail?id=mount-suction-box" }
        ]
      },

      "change-worm-gear": {
        title: "更换蜗轮 Changing the Worm Gear (3.10.1)",
        steps: [
          { label: "步骤 a", cn: "将真空箱旋转到拆卸位置。", en: "Turn the suction box into the dismounting position." },
          { label: "步骤 b", cn: "拆除两侧的六角头螺栓（1）。", en: "Remove the hexagon head bolts (1) on both sides." },
          { label: "步骤 c", cn: "拆除夹紧环（2）。", en: "Remove the clamping ring (2)." },
          { label: "步骤 d", cn: "拆除压力件（3）。", en: "Remove the pressure piece (3)." },
          { label: "步骤 e", cn: "拆除螺钉（4）。", en: "Remove the head screws (4)." },
          { label: "步骤 f", cn: "推开两侧的带锁紧螺丝的上盖（5）。", en: "Push off the covers (5) on both sides with forcing screws." },
          { label: "步骤 g", cn: "旋出一侧蜗杆（6），直到可以拆卸圆锥滚子轴承（7）和密封盘（8）。", en: "Turn out worm (6) on one side far enough to remove the tapered roller bearing (7) and the sealing disc (8)." },
          { label: "步骤 h", cn: "旋出另一个方向蜗杆（这会另将一侧的圆锥滚子轴承推出）。", en: "Turn out the worm in the other direction (this pushes the tapered roller bearing out on the other side)." },
          { label: "步骤 i", cn: "通过拆除螺钉（10），拆下盖板（9）。", en: "Remove cover plate (9) by removing the screws (10)." },
          { label: "步骤 j", cn: "拆除六角头螺栓（11）。", en: "Remove hexagon head bolts (11)." },
          { label: "步骤 k", cn: "拆除蜗轮盖（12）（必要时用顶起螺钉协助）。", en: "Dismount the worm gear cover (12) (with the aid of push-off screws if necessary)." },
          { label: "步骤 l", cn: "拆除螺栓（13）。", en: "Remove the bolts (13)." },
          { label: "步骤 m", cn: "推开蜗轮（14）并拆下。", en: "Push off worm gear wheel (14) and remove." }
        ],
        image: "images/page36-img02.jpeg",
        imageCaption: "Fig. 21: Removing the worm gear / 图21：拆除蜗轮",
        footerNote: "按反向顺序重新装配。所有零件必须清洁，所有亮漆零件和配合处必须在装配前进行润滑。组装前，始终检查密封件、密封表面和配合处是否出现磨损。",
        alerts: [
          { type: "info", title: "安装注意", content: "安装不当可能会造成的损坏。所有零件必须清洁，所有亮漆零件和配合处必须在装配前进行润滑。组装前，始终检查密封件、密封表面和配合处是否出现磨损。" }
        ]
      },

      "dismount-suction-box": {
        title: "拆除真空箱 Dismounting the Suction Box (3.10.2)",
        alerts: [],
        prerequisites: [
          { cn: "已经拆除真空压榨辊，并放置在处于在辊体上的合适支架上。", en: "The suction press roll has been dismounted and placed on a suitable support resting on the roll shell." },
          { cn: "轴承座与辊体之间的抗扭装置已安装完毕。", en: "The anti-torsion devices between bearing housing and roll shell have been mounted." },
          { cn: "真空箱处在拆除位置。", en: "The suction box is in the removal position." }
        ],
        sections: [
          {
            title: "推开操作侧辊筒轴颈装置",
            steps: [
              { label: "步骤 a", cn: "在为此目的提供的点（1）处，将操作侧辊筒轴颈单元连接到设备间起重机上。", en: "Attach the operator-side roll journal unit to the machine room crane at the point (1) provided for this purpose." },
              { label: "步骤 b", cn: "拆卸盖环（2）。", en: "Remove the cover ring (2)." },
              { label: "步骤 c", cn: "松开螺母（3），大约松开螺钉10毫米（小心：不要完全拆除）。", en: "Loosen the nuts (3) and unscrew by approx. 10 mm (Caution: do not remove completely)." },
              { label: "步骤 d", cn: "将推出孔上拆除闭合销。", en: "Dismount the closing pins from the push-off bores." },
              { label: "步骤 e", cn: "安装顶起螺栓（4）。", en: "Mount the forcing screws (4)." },
              { label: "步骤 f", cn: "使用顶起螺栓（4），压出操作侧轴头（5）。", en: "Push off the operator-side roll journal (5) using the forcing screws (4)." },
              { label: "步骤 g", cn: "用顶起螺钉推出时，应交替拧紧螺钉，直到辊体（6）与操作侧轴头（5）之间的配合面分离为止。", en: "When pushing off with forcing screws, they should be tightened alternately until the press fit between roll shell (6) and operator-side roll journal (5) has been detached." },
              { label: "步骤 h", cn: "在分离压配合面后，拆下螺母（3），并借助顶起螺栓的帮助下，将辊筒轴颈从辊体中推出。", en: "After detaching the press fit, remove the nuts (3) and push the roll journal out of the roll shell with the aid of the forcing screws." }
            ],
            image: "images/page38-img02.jpeg",
            imageCaption: "Fig. 22: Pushing off the operator-side roll journal unit / 图22：推出操作侧辊筒轴颈装置"
          },
          {
            title: "移出真空箱",
            steps: [
              { label: "步骤 a", cn: "将真空箱（1）小心地向操作侧拉动，拉出传动侧的配合位置（2），直到移出轮（3）可以停放在辊壳（4）的内表面上。", en: "Pull the suction box (1) carefully towards the operator side out of the drive-side fitting area (2) until the run-out rolls (3) are resting on the inside on the roll shell (4)." },
              { label: "步骤 b", cn: "拉出真空箱，直到移出轮处在辊壳末端。", en: "Pull out the suction box until the run-out rolls are at the end of the roll shell." },
              { label: "步骤 c", cn: "利用设备间起重机，通过吊带（5），吊起真空箱。如有需要，可使用二台起重机。", en: "Suspend the suction box from the machine room crane by means of a belt (5). Use a second crane trolley if required." },
              { label: "步骤 d", cn: "将真空箱完全移出。", en: "Run the suction box out completely." },
              { label: "步骤 e", cn: "放置真空箱，操作侧轴头放置在适当的支撑上。", en: "Place the suction box with the operator-side roll journal unit on a suitable support." }
            ],
            image: "images/page39-img02.jpeg",
            imageCaption: "Fig. 23: Running the suction box out / 图23：移出真空箱"
          }
        ]
      },

      "mount-suction-box": {
        title: "装入真空箱 Running the Suction Box In (3.10.3)",
        paragraphs: [
          { cn: "为了装入真空箱，按拆除真空箱的反序，执行步骤。", en: "To run the suction box in, carry out the steps described for removing it in reverse order." }
        ],
        alerts: [
          { type: "info", title: "安装注意", content: "安装真空箱时，确保所有装配表面均已正确清洁。传动侧真空箱颈部（2）的装配表面和操作侧辊筒轴颈座必须用石墨润滑脂润滑！" },
          { type: "info", title: "", content: "安装不当可能会造成的损坏。所有零件必须清洁，所有亮漆零件和配合处必须在装配前进行润滑。" },
          { type: "info", title: "", content: "真空箱脏污可造成的损坏。真空箱必须每年从机器上取出一次进行清洁工作。在进行这项工作时，还应检查润滑喷管中喷嘴的作用。" }
        ]
      },

      "change-seals": {
        icon: "🔒",
        title: "更换密封件 Changing the Seals",
        subtitle: "步骤 3.11 · 密封条更换",
        alerts: [],
        prerequisites: [
          { cn: "在更换密封件前必须拆下真空箱。", en: "The suction box must be removed before changing the seals." }
        ],
        steps: [
          { label: "步骤 a", cn: "拉出纵向密封条（1）。", en: "Pull out longitudinal sealing strips (1)." },
          { label: "步骤 b", cn: "松开螺栓（2），抬出安装架（3）。", en: "Unscrew bolts (2) and lift off mounting (3)." },
          { label: "步骤 c", cn: "拉出边缘密封条（4）。", en: "Pull out edge sealing strips (4)." },
          { label: "步骤 d", cn: "检查空气软管（5），必要时安装新软管。", en: "Check air hoses (5) and install new ones if necessary." },
          { label: "步骤 e", cn: "插入新的密封条。", en: "Insert the new seals." }
        ],
        image: "images/page41-img03.jpeg",
        imageCaption: "Fig. 24: Changing the sealing strips / 图24：更换密封带",
        alerts: [
          { type: "warning", title: "安装注意", content: "安装不当可能会造成的损坏。所有零件必须清洁，所有亮漆零件和配合处必须在装配前进行润滑。组装前，始终检查密封件、密封表面和配合处是否出现磨损。" }
        ]
      },

      "change-bearings": {
        icon: "🔩",
        title: "更换轴承 Changing the Bearings",
        subtitle: "步骤 3.12 · 操作侧 & 传动侧轴承",
        alerts: [
          { type: "danger", title: "⚠️ 夹住与辗压", content: "作业中，肢体可能被夹住或辗压。不要将手放在悬吊载荷下方！穿戴个人防护装备！运转部件必须使用支撑杆固定到位。" },
          { type: "info", title: "", content: "安装不当可能会造成轴承损坏。必须清洗所有零件，所有亮漆零件和配合必须在装配前进行润滑。在装配之前，一定要检查密封件、密封表面和装配的磨损。" }
        ],
        sections: [
          {
            title: "3.12.1 拆除操作侧轴承 Dismounting the Operator-side Bearing",
            steps: [
              { label: "步骤 a", cn: "拆卸蜗杆传动装置。", en: "Dismount worm drive." },
              { label: "步骤 b", cn: "松开螺钉（1），拆除外轴承盖（2）。", en: "Detach screws (1) and remove the outer bearing cover (2)." },
              { label: "步骤 c", cn: "拆除安全护罩（3）。", en: "Remove the safety cover (3)." },
              { label: "步骤 d", cn: "拆下螺栓（4），拆下轴承座（5）。", en: "Detach bolts (4) and remove the bearing housing (5)." },
              { label: "步骤 e", cn: "将固定螺钉（6）拧入锁紧螺母（7）中，并松开锁紧螺钉（12）。", en: "Screw the retaining screws (6) into the shaft nut (7) and loosen the locking screws (12)." },
              { label: "步骤 f", cn: "用冲击扳手松开锁紧螺母2-3圈。", en: "Loosen shaft nut by 2–3 turns with the striking-face wrench." },
              { label: "步骤 g", cn: "将液压手动泵连接到固定孔（8）中，并推开自动调心滚珠轴承（9）。", en: "Connect up a hydraulic hand pump to the forcing bore (8) and push the self-aligning roller bearing (9) off." },
              { label: "步骤 h", cn: "拆除液压手动泵，用螺塞堵上辊子轴颈中的压力孔。", en: "Dismount hydraulic hand pump, close off forcing bore in roll journal with the screw plug." },
              { label: "步骤 i", cn: "拆卸轴螺母和自动调心滚珠轴承。", en: "Remove shaft nut and self-aligning roller bearing." },
              { label: "步骤 j", cn: "拆卸内轴承盖（10）和迷宫环（11）。", en: "Remove inner bearing cover (10) and labyrinth ring (11)." }
            ],
            image: "images/page43-img03.jpeg",
            imageCaption: "Fig. 25: Changing the operator-side bearing / 图25：更换操作侧轴承"
          },
          {
            title: "3.12.2 拆除传动侧轴承 Dismounting the Drive-side Bearing",
            steps: [
              { label: "步骤 a", cn: "松开螺栓（1），并拆除带密封件的法兰（2）。", en: "Unscrew bolts (1) and remove the flange (2) with the seal." },
              { label: "步骤 b", cn: "松开螺钉（3），拆除外轴承盖（4）。", en: "Detach screws (3) and remove the outer bearing cover (4)." },
              { label: "步骤 c", cn: "拆除安全护罩（5）。", en: "Remove the safety cover (5)." },
              { label: "步骤 d", cn: "拆下螺栓（6），拆下轴承座（7）。", en: "Detach bolts (6) and remove the bearing housing (7)." },
              { label: "步骤 e", cn: "将固定螺钉（8）拧入锁紧螺母（9）中，并松开锁紧螺钉（14）。", en: "Screw the retaining screws (8) into the shaft nut (9) and loosen the locking screws (14)." },
              { label: "步骤 f", cn: "用冲击扳手松开锁紧螺母2-3圈。", en: "Loosen shaft nut by 2–3 turns with the striking-face wrench." },
              { label: "步骤 g", cn: "将液压手动泵连接到孔压力（10），并推开自动调心滚珠轴承（11）。", en: "Connect up a hydraulic hand pump to the forcing bore (10) and push off the self-aligning roller bearing (11)." },
              { label: "步骤 h", cn: "拆除液压手动泵，用螺塞，封闭辊筒轴颈内的推出孔。", en: "Remove hydraulic hand pump, close push-off bore in roll journal with the screw plug." },
              { label: "步骤 i", cn: "拆除轴螺母和自动调心滚珠轴承。", en: "Remove the shaft nut and the self-aligning roller bearing." },
              { label: "步骤 j", cn: "拆卸内轴承盖（12）和迷宫环（13）。", en: "Remove inner bearing cover (12) and labyrinth ring (13)." }
            ],
            image: "images/page44-img03.jpeg",
            imageCaption: "Fig. 26: Changing the drive-side bearing / 图26：更换传动侧轴承"
          },
          {
            title: "3.12.3 安装轴承 Mounting the Bearings",
            steps: [
              { label: "步骤 a", cn: "在所有滑动表面，涂上一层低粘度润滑油。", en: "Apply a light coat of low-viscosity oil to all sliding surfaces." },
              { label: "步骤 b", cn: "通过将油泵入液压螺母中，将轴承移至开始位置。", en: "Move bearing into the starting position by pumping oil into the hydraulic nut." },
              { label: "步骤 c", cn: "开始位置的油压（Pstart）：操作侧 1.02 MPa，传动侧 1.02 MPa。", en: "Oil pressure for starting position (Pstart): Operator side 1.02 MPa, Drive side 1.02 MPa." },
              { label: "步骤 d", cn: "将刻度表设置为「0」。", en: "Set the dial gauge to '0'." },
              { label: "步骤 e", cn: "使用液压螺母将轴承进一步推到轴上，直到获得表中给出的所需轴向位移（SS = 2.894 mm）值。", en: "Push bearing further onto the shaft using the hydraulic nut until the required value for the axial displacement (Ss = 2.894 mm) according to the table is obtained." }
            ],
            image: "images/page45-img03.jpeg",
            imageCaption: "Fig. 27: Mounting the bearing / 图27：安装轴承",
            table: {
              headers: ["轴承位置", "轴承类型", "Pstart", "位移路径 SS"],
              rows: [
                ["操作侧 Operator side", "SKF 239/600 CAK/C083W33", "1.02 MPa", "2.894 mm"],
                ["传动侧 Drive side", "SKF 239/600 CAK/C083W33", "1.02 MPa", "2.894 mm"]
              ]
            }
          }
        ]
      },

      "doctor-maintenance": {
        icon: "🔪",
        title: "刮刀维护 Doctor for Suction Press Roll",
        subtitle: "步骤 3.13 · 刮刀系统",
        content: {
          cn: "关于刮刀片的设置、更换以及安全性的详细描述，请参见供应商文件。",
          en: "Detailed descriptions for setting, changing the doctor blades, and safety can be found in supplier documentation."
        },
        image: "images/page46-img02.jpeg",
        imageCaption: "Fig. 28: Doctor for suction press roll / 图28：真空压榨辊用刮刀"
      },

      "clean-drill-holes": {
        icon: "🧽",
        title: "清洁壳体钻孔 Cleaning the Drill Holes",
        subtitle: "步骤 3.14 · 辊壳钻孔清洁",
        paragraphs: [
          { cn: "壳体中的钻孔在操作过程中可能会堵塞。造成堵塞的材料可以在短时间内硬化。必须定期进行目视检查。按需要和在每个毛毯更换后，进行清洁工作。", en: "The bores in the shell may become clogged during operation. The material causing plugging can harden within a short time. A visual check must be conducted regularly. Cleaning is to be carried out as required and after each felt change." }
        ],
        steps: [
          { label: "步骤 a", cn: "将机器切换到爬行速度。", en: "Switch machine to creep speed." },
          { label: "步骤 b", cn: "用清洁枪（最多40巴）从外面清洁钻孔。", en: "Spray through the drill holes from the outside with the cleaning lance (40 bar max.)" }
        ],
        alerts: [
          { type: "info", title: "注意", content: "在清洗外壳中的钻孔之前，一定要切换到爬行速度！<br><small>Always switch to creep speed before cleaning the bores in the shell.</small>" },
          { type: "info", title: "注意", content: "如果真空显示超过工作压力，钻孔就会堵塞。这些材料会硬化，损坏毛毯。因此，应定期清洁辊体上的钻孔！" },
          { type: "info", title: "研磨辊体", content: "在拆除组装完毕的真空压榨辊后，在驱动轴颈插入以旋转辊的条件下，研磨辊体。弯曲曲线 >> 技术参数" }
        ]
      }
    }
  }
};

// 将数据挂载到 window 对象，供搜索和其他模块访问
window.APP_DATA = APP_DATA;
window.APP_DATA_LOADED = true;
