/**
 * TM EOM Suite - 完整文档数据
 * Tissue Machine | Headbox | Crescent Former | Press Section
 */

const APP_DATA = {
  machines: {

    // ============================================================
    // TISSUE MACHINE
    // ============================================================
    general: {
      icon: "🏭",
      title: "Tissue Machine EOM",
      shortTitle: "TM EOM",
      subtitle: "PrimeLine Compact M1600 · 卫生纸机总览",
      info: "技术参数 · 安全与安装 · 操作与故障排除 · 68页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "机型、产能、速度、宽度等规格数据", route: "tech-data" },
          { icon: "🛡️", title: "安全与安装 Safety & Installation", subtitle: "安全条例 · 运输保管 · 安装 · 冷测试 · 启动", route: "components" },
          { icon: "🔧", title: "操作与故障排除 Operation & Troubleshooting", subtitle: "清洁 · 启停 · 机器设置 · 图表曲线 · 故障排查", route: "maintenance" }
        ],
        technicalData: {
          sections: [{
            title: "📊 整机数据 Machine Data",
            type: "data-table",
            rows: [
              { label: "机型 Machine Type", value: "PrimeLine Compact M1600" },
              { label: "设计产能 Capacity (design)", value: "93.8 ADMT/d" },
              { label: "纸种 Paper Types", value: "卫生纸、餐巾纸、手帕纸、面巾纸" },
              { label: "定量 Basic Weight", value: "11–30 g/m²" },
              { label: "干度 Dryness (at reel)", value: "93%" },
              { label: "设计速度 Design Speed", value: "1700 m/min" },
              { label: "最大操作速度 Max Operating Speed", value: "1650 m/min" },
              { label: "流浆箱宽度 Headbox Pond Width", value: "3596 mm" },
              { label: "网宽 Wire Width", value: "3541 mm" },
              { label: "毛毯宽 Felt Width", value: "3800 mm" },
              { label: "卷纸宽度 Sheet Width on Reel", value: "3500 mm" }
            ]
          }],
          note: "PrimeLine Compact M1600 · C&S Paper (Jiangsu) Co., Ltd. · 2026"
        },
        components: {
          application: {
            title: "安全与安装 Safety & Installation",
            cn: "安德里茨 PrimeLine Compact M1600 卫生纸机。操作前必须阅读并理解所有安全条例。安装需严格按照图纸进行。",
            en: "ANDRITZ PrimeLine Compact M1600 Tissue Machine. All safety regulations must be read and understood before operation. Installation must follow assembly drawings strictly."
          },
          overview: {
            title: "内容导航 Contents",
            items: [
              { num: 1, name: "安全条例 Safety Regulations", en: "安全装置 · 个人防护 · 温度噪音 · 电气液压焊接", route: "maintenance-detail?id=safety" },
              { num: 2, name: "安装 Installation", en: "运输 · 保管 · 安装 · 冷测试 · 启动", route: "maintenance-detail?id=installation" }
            ]
          }
        },
        maintenance: {
          topics: {
            safety: {
              icon: "🛡️", title: "安全条例 Safety Regulations (第2章)", subtitle: "安全装置 · 个人防护 · 温度噪音 · 电气液压焊接",
              alerts: [
                { type: "danger", title: "基本安全", content: "必须遵守所有事故预防规定。设备只能在安全停机后进行维护。所有能源供应必须断开。<br><small>All accident prevention rules must be observed. Maintenance only when machine is securely shut down. All energy supplies must be disconnected.</small>" }
              ],
              sections: [
                { title: "2.1 基本安全条例 General Safety", paragraphs: [{ cn: "遵守各项事故预防规定。确保足够的维护作业空间。不超过起重机和吊具的允许载荷。不在悬吊负荷下走动。", en: "Observe all accident prevention rules. Ensure adequate maintenance space. Do not exceed crane and lifting gear capacities. Do not walk under suspended loads." }]},
                { title: "2.2 危险和警告标志 Danger & Warning Signs", paragraphs: [{ cn: "设备上贴有危险和警告标志。必须遵守所有标志指示。标志损坏或脱落时必须更换。", en: "Danger and warning signs are affixed to the machine. All sign instructions must be followed. Replace damaged or missing signs." }]},
                { title: "2.3 指定用途 Intended Use", paragraphs: [{ cn: "设备仅用于卫生纸生产。任何超出指定用途的使用均视为违规。运营公司承担全部责任。", en: "Machine is intended exclusively for tissue paper production. Any use beyond this is considered improper. Operating company bears full liability." }]},
                { title: "2.6 运营公司责任 Operator Obligations", paragraphs: [{ cn: "运营公司必须确保设备仅在安全、功能正常的状态下运行。必须提供个人防护装备。必须制定操作说明。", en: "Operating company must ensure machine runs only in safe, functional condition. PPE must be provided. Operating instructions must be established." }]},
                { title: "2.7 人员基本责任 Personnel Obligations", paragraphs: [{ cn: "作业人员必须阅读并理解操作手册。必须遵守安全条例。发现安全隐患必须立即报告。", en: "Personnel must read and understand the manual. Must follow safety regulations. Must report safety hazards immediately." }]},
                { title: "2.8 安全装置 Safety Devices", paragraphs: [{ cn: "紧急停机装置必须功能正常。安全装置不可拆除、绕过或使其失效。维修后必须重新安装所有安全装置。", en: "EMERGENCY STOP must function properly. Safety devices must not be removed, bypassed, or disabled. All must be reinstalled after maintenance." }]},
                { title: "2.9 个人防护装备 PPE", paragraphs: [{ cn: "作业时必须穿戴：安全帽、防护手套、安全鞋、护目镜、听力保护装置。", en: "Must wear during work: safety helmet, protective gloves, safety shoes, goggles, hearing protection." }]},
                { title: "2.11-2.17 其他安全事项", paragraphs: [
                  { cn: "温度：注意设备高温表面（扬克缸可达120°C+）。噪音：超过85 dB(A)需佩戴听力保护。电气：电气作业只能由熟练电工执行。液压/气动：维修前必须释放压力。焊接：需咨询ANDRITZ后批准。油与油脂：收集泄漏油并妥善处理。", en: "Temperature: Beware hot surfaces (Yankee 120°C+). Noise: >85 dB(A), wear protection. Electrical: only skilled electricians. Hydraulic/Pneumatic: depressurize before work. Welding: consult ANDRITZ first. Oils: collect and dispose properly." }
                ]}
              ]
            },
            installation: {
              icon: "📦", title: "安装 Installation (第4章)", subtitle: "运输 · 保管 · 安装 · 冷测试 · 启动",
              sections: [
                { title: "4.3 运输 Transport", paragraphs: [{ cn: "使用合适的吊具和绳索。辊子吊装时注意使用专用吊点。不超过起重机允许载荷。", en: "Use appropriate lifting gear and ropes. Use dedicated lifting points for rolls. Do not exceed crane capacity." }]},
                { title: "4.4 保管 Safekeeping", paragraphs: [{ cn: "施胶辊应避光、防潮、防冻保存。避免接触化学品和油类。定期旋转以防变形。", en: "Store rubberised rolls away from light, moisture, and frost. Avoid chemicals and oils. Rotate periodically to prevent deformation." }]},
                { title: "4.5 安装 Installation", paragraphs: [{ cn: "按安装图进行设备安装。确保足够的维护作业空间。安装外围设备（管道、电气、气动）。基础必须符合规格要求。", en: "Install according to assembly drawings. Ensure adequate maintenance space. Install peripheral equipment (piping, electrical, pneumatic). Foundation must meet specifications." }]},
                { title: "4.6 连接 Connect Up", paragraphs: [{ cn: "连接所有电源、气源、水源和蒸汽管路。检查所有连接是否牢固、无泄漏。", en: "Connect all power, air, water, and steam lines. Check all connections are secure and leak-free." }]},
                { title: "4.7 冷测试 Cold Test", paragraphs: [{ cn: "首次启动前必须进行冷测试：检查所有连接、润滑点、转动方向、安全装置功能。确认所有急停按钮工作正常。", en: "Cold test required before initial start-up: check all connections, lubrication points, rotation direction, safety device function. Verify all E-STOP buttons work." }]},
                { title: "4.11-4.12 启动 Start-up", paragraphs: [{ cn: "启动前确认所有前提条件。检查安全装置、防护罩、润滑。按启动顺序逐步操作。记录运行参数。", en: "Verify all prerequisites before start-up. Check safety devices, guards, lubrication. Follow start-up sequence step by step. Record operating parameters." }]},
                { title: "4.8 拆卸与处置 Disassembly & Disposal", paragraphs: [{ cn: "设备报废时须按环保要求拆卸和处置。遵守当地法规处理废料、油品和化学品。", en: "Disassemble and dispose of according to environmental requirements. Follow local regulations for waste, oils, and chemicals." }]}
              ]
            },
            operation: {
              icon: "▶️", title: "操作 Operation (4.17–4.21)", subtitle: "清洁 · 启动 · 停机 · DCS控制 · 操作条件",
              sections: [
                { title: "清洁 Cleaning (4.17)", paragraphs: [{ cn: "每次停机后彻底清洁。流浆箱不能用尖锐工具。用清水和许可清洁剂冲洗约15分钟。", en: "Thorough cleaning after each shutdown. No sharp tools for headbox. Flush with fresh water and approved cleaning agents for ~15 min." }]},
                { title: "启动 Starting (4.18)", paragraphs: [{ cn: "检查所有安全装置。确保所有防护罩就位。通知所有人员。按DCS启动程序操作。", en: "Check all safety devices. Ensure all guards in place. Notify all personnel. Follow DCS start-up sequence." }]},
                { title: "停机 Shutdown (4.19)", paragraphs: [{ cn: "按DCS停机程序操作。停止进浆、清洗系统、释放张力、关闭蒸汽。", en: "Follow DCS shutdown sequence. Stop stock feed, clean system, relieve tensions, shut off steam." }]},
                { title: "紧急停机后重启 (4.20)", paragraphs: [{ cn: "排除故障原因。检查设备有无损坏。确认安全后再重新启动。", en: "Eliminate fault cause. Check for equipment damage. Confirm safety before restarting." }]},
                { title: "操作条件 Operating Conditions (4.21)", paragraphs: [{ cn: "遵守设计参数（速度、温度、压力）。定期检查运行状态。记录异常情况。", en: "Observe design parameters. Regularly check operating conditions. Log anomalies." }]}
              ]
            },
            "machine-settings": {
              icon: "⚙️", title: "机器设置 Machine Settings (4.22)", subtitle: "流浆箱 · 网毯校正 · 真空箱角度",
              sections: [
                { title: "流浆箱 Headbox (4.22.1)", paragraphs: [{ cn: "调节回流校正、唇口开度。参见流浆箱专项文档。", en: "Adjust return flow correction, slice lip opening. See Headbox documentation." }]},
                { title: "网和毯校正装置 (4.22.2)", paragraphs: [{ cn: "气动控制系统：PC1重量补偿调节器、PC2控制波纹管调节器、FCV1流量控制、FCV2控制阀。出现校正问题时参见故障排除表。", en: "Pneumatic control: PC1 weight compensation, PC2 control bellow regulator, FCV1 flow control, FCV2 control valve. See troubleshooting table for guiding issues." }]},
                { title: "真空压榨辊真空箱角度 (4.22.3)", paragraphs: [{ cn: "通过方颈调节蜗轮箱，直到密封条2处无泄漏空气进入。可在运行中进行调节。", en: "Adjust worm gear box via square neck until no leak air enters at sealing strip 2. Can be adjusted during operation." }]}
              ]
            },
            diagrams: {
              icon: "📈", title: "图表与特性曲线 Diagrams (4.23)", subtitle: "流浆箱压力图 · 扬克缸加热曲线 · 蒸汽压力特性",
              sections: [
                {
                  title: "流浆箱动态压力图 (4.23.1) Headbox Dynamic Pressure",
                  image: "images-general/page54-img02.png",
                  imageCaption: "Fig. 17: Headbox dynamic pressure diagram / 流浆箱动态压力图",
                  paragraphs: [{ cn: "显示流浆箱在不同速度下的背压关系。用于设定正确的运行参数。", en: "Shows headbox back-pressure relationship at different speeds." }]
                },
                {
                  title: "扬克缸加热过程 (4.23.2) Yankee Heating",
                  image: "images-general/page56-img02.jpeg",
                  imageCaption: "Fig. 19: Yankee heating curve / 扬克缸加热过程曲线",
                  paragraphs: [{ cn: "手动加热。爬行速度约30 m/min。最大加热速率30°C/h。90°C冷凝水时增压。2 bar蒸汽/约120°C表面温度时准备就绪。", en: "Manual heating. Crawl speed ~30 m/min. Max heating rate 30°C/h. Boost at 90°C condensate. Ready at 2 bar / ~120°C." }]
                },
                {
                  title: "蒸汽压力 3.5 bar · 1112 m/min",
                  image: "images-general/page57-img02.png",
                  imageCaption: "Fig. 21: Steam pressure 3.5 bar / 蒸汽压力3.5 bar特性曲线",
                  paragraphs: [{ cn: "扬克缸特性曲线 — 蒸汽压力3.5 bar，速度1112 m/min。", en: "Yankee characteristic curve — Steam pressure 3.5 bar, 1112 m/min." }]
                },
                {
                  title: "蒸汽压力 4 bar · 1200 m/min",
                  image: "images-general/page58-img02.png",
                  imageCaption: "Fig. 23: Steam pressure 4 bar / 蒸汽压力4 bar特性曲线",
                  paragraphs: [{ cn: "扬克缸特性曲线 — 蒸汽压力4 bar，速度1200 m/min。", en: "Yankee characteristic curve — Steam pressure 4 bar, 1200 m/min." }]
                },
                {
                  title: "蒸汽压力 8.5 bar · 1600 m/min",
                  image: "images-general/page59-img02.png",
                  imageCaption: "Fig. 25: Steam pressure 8.5 bar / 蒸汽压力8.5 bar特性曲线",
                  paragraphs: [{ cn: "扬克缸特性曲线 — 蒸汽压力8.5 bar，速度1600 m/min。", en: "Yankee characteristic curve — Steam pressure 8.5 bar, 1600 m/min." }]
                },
                {
                  title: "蒸汽压力 8.8 bar · 1500 m/min",
                  image: "images-general/page60-img02.png",
                  imageCaption: "Fig. 27: Steam pressure 8.8 bar / 蒸汽压力8.8 bar特性曲线",
                  paragraphs: [{ cn: "扬克缸特性曲线 — 蒸汽压力8.8 bar，速度1500 m/min。", en: "Yankee characteristic curve — Steam pressure 8.8 bar, 1500 m/min." }]
                },
                {
                  title: "蒸汽压力 9.5 bar · 1538 m/min",
                  image: "images-general/page61-img02.png",
                  imageCaption: "Fig. 29: Steam pressure 9.5 bar / 蒸汽压力9.5 bar特性曲线",
                  paragraphs: [{ cn: "扬克缸特性曲线 — 蒸汽压力9.5 bar，速度1538 m/min。", en: "Yankee characteristic curve — Steam pressure 9.5 bar, 1538 m/min." }]
                }
              ]
            },
            troubleshooting: {
              icon: "⚠️", title: "操作故障 Troubleshooting (4.26)", subtitle: "流浆箱 · 成型器 · 压榨部 · 扬克缸 · 卷纸机故障",
              sections: [
                { title: "流浆箱 Headbox (4.26.1)", paragraphs: [{ cn: "纤维絮聚、横幅定量不均、唇口堵塞。参见故障排查表。", en: "Fiber flocculation, uneven cross-profile, slice lip clogging. See troubleshooting table." }]},
                { title: "新月型成型器 Crescent Former (4.26.2)", paragraphs: [{ cn: "网跑偏、网起皱、脱水不均、毛毯问题。参见故障排查表。", en: "Wire misalignment, wrinkling, uneven dewatering, felt issues. See troubleshooting table." }]},
                { title: "压榨部 Press Section (4.26.3)", paragraphs: [{ cn: "真空度不足、辊面磨损、密封条泄漏、毛毯寿命缩短。", en: "Insufficient vacuum, roll cover wear, sealing strip leaks, reduced felt life." }]},
                { title: "扬克缸 Yankee (4.26.4–4.26.5)", paragraphs: [{ cn: "涂层不均、干燥效率下降。停电时：关闭蒸汽、关闭燃烧器、收回热风罩、停止喷淋、抬起刮刀、每30分钟转1/4圈。", en: "Uneven coating, reduced drying. Power failure: shut steam, switch off burner, retract hood, stop showers, lift doctors, rotate every 30 min." }]},
                { title: "卷纸机 Reel (4.26.6)", paragraphs: [{ cn: "卷纸不齐、张力问题、纸芯固定故障。", en: "Misaligned winding, tension issues, core fixing faults." }]}
              ]
            }
          },
          procedures: {}
        }
      }
    },

    // ============================================================
    // HEADBOX
    // ============================================================
    headbox: {
      icon: "📐",
      title: "TM-Headbox EOM",
      shortTitle: "Headbox EOM",
      subtitle: "PrimeFlow 流浆箱 · 操作与维护",
      info: "技术参数 · 11个主要部件 · 流浆箱摆动 · 50页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "宽度、流量、速度、重量等规格", route: "tech-data" },
          { icon: "🔧", title: "设备描述 Description", subtitle: "11个主要部件 · 技术描述 · 工作条件", route: "components" },
          { icon: "🛠", title: "维护 Maintenance", subtitle: "检查 · 清洁 · 润滑 · 摆动 · 更换插件 · 唇口设定", route: "maintenance" }
        ],
        technicalData: {
          sections: [{
            title: "📊 流浆箱规格 Headbox Data",
            type: "data-table",
            rows: [
              { label: "流浆箱宽度 Pond Width", value: "3596 mm" },
              { label: "最大流量 Max. Flow", value: "62,000 l/min" },
              { label: "设计速度 Design Speed", value: "1900 m/min" },
              { label: "最大操作速度 Max. Operating Speed", value: "1650 m/min" },
              { label: "设计喷浆速度 Design Jet Velocity", value: "1600 m/min" },
              { label: "流量比 Flow Ratio", value: "1:2" },
              { label: "供料侧 Stock Supply", value: "传动侧 Drive Side" },
              { label: "层数 No. of Layers", value: "1" },
              { label: "浆料浓度 Stock Consistency", value: "约 0.15–0.30%" },
              { label: "浆料温度 Pulp Temperature", value: "60 °C" },
              { label: "流浆箱总重 Headbox Weight", value: "约 14,530 kg" }
            ]
          }],
          note: "PrimeFlow Headbox · C&S Paper · 2026"
        },
        components: {
          application: {
            title: "应用领域 Field of Application",
            cn: "PrimeFlow流浆箱用于将纤维悬浮液均匀分配到成形网或毛毯的整个宽度上，是纸张成形的关键设备。",
            en: "The PrimeFlow headbox distributes the fiber suspension uniformly across the width of the forming wire or felt.",
            image: "images-headbox/page10-img02.jpeg",
            imageCaption: "Fig. 1: Headbox overview / 流浆箱总览"
          },
          overview: {
            title: "主要部件 Main Components",
            image: "images-headbox/page11-img03.jpeg",
            imageCaption: "Fig. 2: Main components / 流浆箱主要部件",
            items: [
              { num: 1, name: "原悬液进料/涂布器 Stock feed/Spreader", route: "component-detail?id=stock-feed" },
              { num: 2, name: "摆动装置 Pivoting device", route: "component-detail?id=pivoting-device" },
              { num: 3, name: "锁定装置 Locking device", route: "component-detail?id=locking-device" },
              { num: 4, name: "微调装置 Micro-adjusters", route: "component-detail?id=micro-adjusters" },
              { num: 5, name: "阶梯扩散器 Step diffuser block", route: "component-detail?id=diffuser-block" },
              { num: 6, name: "指示装置 Indicating device", route: "component-detail?id=indicating-device" },
              { num: 7, name: "间隙测量 Gap measuring", route: "component-detail?id=gap-measuring" },
              { num: 8, name: "调节装置 Adjusting device", route: "component-detail?id=adjusting-device" },
              { num: 9, name: "喷嘴腔 Nozzle chamber", route: "component-detail?id=nozzle-chamber" },
              { num: "11/12", name: "浆片和裙缘 Slice and apron lips", route: "component-detail?id=slice-lips" },
              { num: 15, name: "抽吸装置 Suction pipe", route: "component-detail?id=suction-pipe" }
            ]
          },
          techDescription: {
            title: "技术描述 Technological Description",
            cn: "纤维悬浮液通过进料口(A)进入，经扩散器(D)均匀分布，在喷嘴腔(E)中加速，通过浆片唇口喷出到成形辊(G)上。",
            en: "Fiber suspension enters through inlet (A), distributed by diffuser (D), accelerated in nozzle chamber (E), jetted onto forming roll (G) through slice lip."
          },
          componentDetails: {
            "stock-feed": { title: "进料/涂布器 Stock Feed/Spreader (1)", description: { cn: "将浆料均匀分配到流浆箱宽度方向。", en: "Distributes stock evenly across the headbox width." }, image: "images-headbox/page13-img02.jpeg", imageCaption: "Fig. 3: Distributor" },
            "pivoting-device": { title: "摆动装置 Pivoting Device (2)", description: { cn: "用于将流浆箱摆动到不同工作位置（操作、换毯、清洁、换辊）。", en: "Swings headbox into different working positions." }, image: "images-headbox/page14-img02.jpeg", imageCaption: "Fig. 4: Pivoting device" },
            "locking-device": { title: "锁定装置 Locking Device (3)", description: { cn: "在维护工作中锁定流浆箱位置，确保安全。", en: "Locks headbox position during maintenance for safety." }, image: "images-headbox/page16-img02.jpeg", imageCaption: "Fig. 5: Locking device" },
            "micro-adjusters": { title: "微调装置 Micro-adjusters (4)", description: { cn: "用于精确调节唇口开度。相邻主轴间最大差0.25 mm，全宽最大差0.5 mm。", en: "Precise lip opening adjustment. Max diff: 0.25 mm spindle-to-spindle, 0.5 mm full width." }, image: "images-headbox/page16-img03.jpeg", imageCaption: "Fig. 6: Micro-adjusters" },
            "diffuser-block": { title: "阶梯扩散器 Step Diffuser Block (5)", description: { cn: "通过阶梯结构使纤维悬浮液均匀分布，防止絮聚。", en: "Uniformly distributes fiber suspension through step structure." }, image: "images-headbox/page17-img02.jpeg", imageCaption: "Fig. 7-8: Step diffuser block" },
            "indicating-device": { title: "指示装置 Indicating Device (6)", description: { cn: "显示唇口开度的刻度装置。", en: "Scale device showing slice lip opening." }, image: "images-headbox/page19-img02.jpeg", imageCaption: "Fig. 9: Gap scale" },
            "gap-measuring": { title: "间隙测量 Gap Measuring (7)", description: { cn: "测量浆片唇口与成形辊之间的间隙。", en: "Measures gap between slice lip and forming roll." }, image: "images-headbox/page20-img02.jpeg", imageCaption: "Fig. 10: Gap measuring" },
            "adjusting-device": { title: "调节装置 Adjusting Device (8)", description: { cn: "用于调节流浆箱的整体位置和角度。", en: "Adjusts overall position and angle of headbox." }, image: "images-headbox/page20-img03.jpeg", imageCaption: "Fig. 11: Adjusting device" },
            "nozzle-chamber": { title: "喷嘴腔 Nozzle Chamber (9)", description: { cn: "浆料在此加速并通过唇口喷出，是纸张成形的关键区域。", en: "Stock accelerates and jets through slice lip - key area for sheet formation." }, image: "images-headbox/page21-img02.jpeg", imageCaption: "Fig. 12: Nozzle chamber" },
            "slice-lips": { title: "浆片和裙缘 Slice & Apron Lips (11, 12)", description: { cn: "浆片唇口决定纸张成形质量。出厂已设定，建议由ANDRITZ服务人员调整。", en: "Slice lip determines formation quality. Factory preset; ANDRITZ service recommended for adjustments." }},
            "suction-pipe": { title: "抽吸装置 Suction Pipe (15)", description: { cn: "用于清理喷淋器的抽吸装置。", en: "Suction device for cleaning showers." }, image: "images-headbox/page23-img02.jpeg", imageCaption: "Fig. 13: Suction pipe" }
          }
        },
        maintenance: {
          topics: {
            "checks-schedule": { icon: "✅", title: "检查与维护计划 Checks & Schedule", subtitle: "日常检查 · 周/月/年维护", sections: [
              { title: "日常检查 Routine Checks", table: { headers: ["组件", "检查内容"], rows: [["流浆箱整体", "泄漏、损坏、异常噪音"], ["唇口", "磨损、堵塞"], ["喷淋管", "喷嘴堵塞"], ["仪表", "压力、温度、流量读数"]] }},
              { title: "维护计划", table: { headers: ["周期", "检查内容"], rows: [["每周", "泄漏、唇口间隙、磨损"], ["每月", "齿轮箱油位/温度/噪音、伺服驱动、压力传感器"], ["每年", "内部泄漏/磨损/清洁、管束、膨胀节"]] }}
            ]},
            cleaning: { icon: "🧹", title: "清洁 Cleaning (4.7)", subtitle: "清洁方法 · 化学清洁剂 · 管束清理", alerts: [{ type: "warning", title: "小心", content: "冷却后才能清洁。出口侧最大清洁压力40 bar。切勿使用尖锐物体。" }], steps: [{ label: "步骤 1", cn: "停止进浆，用水冲洗约15分钟。", en: "Stop stock feed, flush with water ~15 min." }, { label: "步骤 2", cn: "可选化学清洁：HCl 2-5%、NaOH 2-5%、硫酸 0.45%，最高60°C。", en: "Optional chemical: HCl 2-5%, NaOH 2-5%, sulfamic acid 0.45%, max 60°C." }, { label: "步骤 3", cn: "用清水彻底冲洗。", en: "Rinse thoroughly with fresh water." }]},
            lubrication: { icon: "🛢️", title: "润滑 Lubrication (4.8)", subtitle: "润滑计划表", image: "images-headbox/page40-img02.jpeg", imageCaption: "Fig. 16: Lubrication points", table: { headers: ["润滑点", "润滑剂", "用量", "间隔"], rows: [["支点轴承", "Mobilith SHC PM460", "2 g", "600 h"], ["行星齿轮", "ISO-VG 680", "—", "检查/更换"], ["轴承-间隙调节", "Mobilith SHC PM460", "1 g", "600 h"]] }},
            "swinging-headbox": { icon: "🔄", title: "摆动流浆箱 Swinging (4.9)", subtitle: "4个工作位置切换操作", alerts: [{ type: "danger", title: "⚠️ 夹持危险", content: "流浆箱摆动时有挤压和夹持危险。必须使用锁定装置。控制面板钥匙从OPERATION切换到SERVICE。" }], sections: [
              { title: "4.9.2 释放网顶张力 + 4.9.3 提升胸辊", steps: [{ label: "步骤 1", cn: "释放顶部网张力。用起重机在吊耳处固定胸辊。", en: "Relieve top wire tension. Secure breast roll with crane at lifting lugs." }, { label: "步骤 2", cn: "拆卸操作侧和传动侧螺栓。电动提升。用固定销固定。", en: "Detach OS and DS bolts. Raise electrically. Secure with retention pins." }], image: "images-headbox/page42-img03.jpeg", imageCaption: "Fig. 17: Raising breast roll" },
              { title: "4.9.4 换毯位置", steps: [{ label: "步骤", cn: "释放锁定装置 → 摆动到换毯位置 → 插入安全锁定。", en: "Release locking → swing to felt changing position → insert safety lock." }], image: "images-headbox/page43-img04.jpeg", imageCaption: "Fig. 18: Felt changing position" },
              { title: "4.9.5 清洁位置", steps: [{ label: "步骤", cn: "摆动到清洁位置 → 插入锁定装置。", en: "Swing to cleaning position → insert locking." }], image: "images-headbox/page45-img03.jpeg", imageCaption: "Fig. 19: Cleaning position" },
              { title: "4.9.6 换辊位置 + 4.9.7 工作位置", steps: [{ label: "步骤", cn: "摆动到换辊位置。完成后解除锁定，摆回工作位置，锁定。", en: "Swing to roll change position. Then release, swing back to operating, lock." }]}
            ]},
            "change-inserts": { icon: "🔧", title: "更换插件 Changing Inserts (4.10)", alerts: [{ type: "warning", title: "小心", content: "检查裙缘唇口是否损坏。用塑料棒敲出插件。用粒度240的带式砂光机磨平。" }], steps: [{ label: "步骤 1", cn: "检查裙缘唇口是否有损坏。", en: "Check apron lip for damage." }, { label: "步骤 2", cn: "用塑料棒敲出旧插件。", en: "Knock out old inserts with plastic rod." }, { label: "步骤 3", cn: "安装新插件。用粒度240的带式砂光机磨平。", en: "Install new inserts. Grind flush with belt sander (grain 240)." }], image: "images-headbox/page48-img03.jpeg", imageCaption: "Fig. 20-21: Removing/Installing inserts" },
            "set-slice-lip": { icon: "📏", title: "设定浆片唇口 Setting Slice Lip (4.11)", alerts: [{ type: "info", title: "注意", content: "出厂已预设。相邻主轴间最大差0.25 mm，全宽最大差0.5 mm。建议由ANDRITZ服务人员调整。" }], steps: [{ label: "步骤", cn: "通过微调装置调节唇口开度。使用刻度指示检查设定值。", en: "Adjust lip opening via micro-adjusters. Check with scale indication." }], image: "images-headbox/page49-img02.jpeg", imageCaption: "Fig. 22: Setting spindle" }
          },
          procedures: {}
        }
      }
    },

    // ============================================================
    // CRESCENT FORMER
    // ============================================================
    former: {
      icon: "🔄",
      title: "TM-Crescent Former EOM",
      shortTitle: "Former EOM",
      subtitle: "PrimeForm 新月型成型器 · 操作与维护",
      info: "技术参数 · 15个主要部件 · 换网换毯 · 换辊 · 86页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "网毯规格 · 辊子参数 · 驱动 · 喷淋水耗", route: "tech-data" },
          { icon: "🔧", title: "设备描述 Description", subtitle: "15个主要部件 · 技术描述", route: "components" },
          { icon: "🛠", title: "维护 Maintenance", subtitle: "清洁润滑 · 换刮刀 · 摆动 · 换网换毯 · 换辊换轴承", route: "maintenance" }
        ],
        technicalData: {
          sections: [
            { title: "📊 网部数据 Wire Data", type: "data-table", rows: [{ label: "网最大张力 Max. Wire Tension", value: "10 N/mm" }, { label: "网宽 Wire Width", value: "3541 mm" }, { label: "网长 Wire Length (min/max)", value: "14,547 / 15,070 mm" }]},
            { title: "📊 毛毯数据 Felt Data", type: "data-table", rows: [{ label: "毛毯最大张力 Max. Felt Tension", value: "6 N/mm" }, { label: "毛毯宽 Felt Width", value: "3800 mm" }, { label: "毛毯长 Felt Length (min/max)", value: "34,350 / 36,750 mm" }]},
            { title: "📊 辊子规格 Rolls", type: "data-table", rows: [
              { label: "成形辊 Forming Roll (2.1)", value: "Ø1500mm · 4115mm · 驱动 · 橡胶 · 7500kg" },
              { label: "网辊 Wire Roll (2.2)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "网张紧辊 Wire Tension Roll (2.3)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "网校正辊 Regulating Roll (2.4)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "胸辊 Breast Roll (2.5)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "导毯辊 Felt Guide Rolls (2.6/2.7)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "毯张紧辊 Felt Tension Roll (2.8)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" },
              { label: "毯驱动辊 Felt Drive Roll (2.9)", value: "Ø520mm · 4115mm · 驱动 · 橡胶 · 1800kg" },
              { label: "毯校正辊 Regulating Roll (2.10)", value: "Ø520mm · 4115mm · 橡胶 · 1800kg" }
            ]}
          ],
          note: "新月型成型器 · 悬臂设计 · C&S Paper · 2026"
        },
        components: {
          application: { title: "应用领域", cn: "新月型成型器PrimeForm用于纸幅成形、脱水并将纸幅传送到压榨部。悬臂设计，便于更换网和毛毯。", en: "Crescent Former PrimeForm for sheet formation, dewatering, and web transfer to press section. Cantilever design." },
          overview: {
            title: "主要部件 Main Components",
            items: [
              { num: 1, name: "流浆箱 Headbox", route: "component-detail?id=hb-unit" },
              { num: 2, name: "胸辊及摆动装置 Breast roll & swing", route: "component-detail?id=breast-roll" },
              { num: 3, name: "机架 Frame (悬臂设计)", route: "component-detail?id=frame" },
              { num: 4, name: "吸水箱 Uhle box", route: "component-detail?id=uhle-box" },
              { num: 5, name: "网校正系统 Wire guiding", route: "component-detail?id=wire-guiding" },
              { num: 8, name: "毛毯校正装置 Felt guiding", route: "component-detail?id=felt-guiding" },
              { num: 9, name: "毛毯张紧装置 Felt tensioning", route: "component-detail?id=felt-tension" },
              { num: 10, name: "网张紧系统 Wire tensioning", route: "component-detail?id=wire-tension" },
              { num: 11, name: "成形辊 Forming roll (Ø1500mm)", route: "component-detail?id=forming-roll" }
            ]
          },
          techDescription: { title: "技术描述", cn: "浆料从流浆箱喷射到成形辊和网之间的间隙。在成形辊上初步脱水后，纸幅附着在毛毯上继续脱水。", en: "Stock jets from headbox into gap between forming roll and wire. After initial dewatering, web adheres to felt for further dewatering." },
          componentDetails: {
            "hb-unit": { title: "流浆箱 Headbox (1)", description: { cn: "详见流浆箱专项文档。", en: "See Headbox documentation." }},
            "breast-roll": { title: "胸辊及摆动装置 (2)", description: { cn: "胸辊可升起以便更换网和毛毯。摆动装置用于移动流浆箱和胸辊。", en: "Breast roll can be raised for wire/felt changes." }},
            "frame": { title: "机架 Frame (3)", description: { cn: "悬臂设计，操作侧可打开以便更换网和毛毯。", en: "Cantilever design, operator side opens for wire/felt changes." }, image: "images-former/page15-img01.jpeg", imageCaption: "Fig. 5-6: Cantilever device" },
            "uhle-box": { title: "吸水箱 Uhle Box (4)", description: { cn: "用于从毛毯中真空脱水。", en: "Vacuum dewatering from felt." }},
            "wire-guiding": { title: "网校正系统 Wire Guiding (5)", description: { cn: "气动式网校正系统，确保网运行在正确位置。", en: "Pneumatic wire guiding system." }},
            "felt-guiding": { title: "毛毯校正装置 Felt Guiding (8)", description: { cn: "气动式毛毯校正系统。", en: "Pneumatic felt guiding system." }},
            "felt-tension": { title: "毛毯张紧装置 Felt Tensioning (9)", description: { cn: "气动张紧，最大张力6 N/mm。", en: "Pneumatic, max 6 N/mm." }},
            "wire-tension": { title: "网张紧系统 Wire Tensioning (10)", description: { cn: "气动张紧，最大张力10 N/mm。", en: "Pneumatic, max 10 N/mm." }},
            "forming-roll": { title: "成形辊 Forming Roll (11)", description: { cn: "Ø1500mm，橡胶包胶，驱动，7500kg。浆料在此初步成形和脱水。", en: "Ø1500mm, rubber covered, driven, 7500kg. Initial formation and dewatering." }}
          }
        },
        maintenance: {
          topics: {
            "checks-schedule": { icon: "✅", title: "检查与维护计划", subtitle: "周/月/半年维护", sections: [
              { title: "每周", table: { headers: ["项目", "内容"], rows: [["网/毛毯", "裂纹、孔洞、起皱"], ["辊", "损坏检查"], ["刮刀片", "磨损"], ["喷淋嘴", "堵塞"]] }},
              { title: "每月", table: { headers: ["项目", "内容"], rows: [["轴承", "温度、振动、噪音"], ["张紧装置", "功能检查"], ["吸水箱", "检查"], ["紧急停机", "功能测试"]] }},
              { title: "每半年", table: { headers: ["项目", "内容"], rows: [["蜗轮升降机", "检查"], ["齿轮箱", "油位/温度/泄漏"], ["伺服驱动", "检查"], ["螺栓", "检查拧紧"]] }}
            ]},
            cleaning: { icon: "🧹", title: "清洁 Cleaning (4.7)", alerts: [{ type: "warning", title: "小心", content: "切勿用尖锐物体或高压设备清洁涂装表面。清洁剂：HCl 2-5%、NaOH 2-5%、硫酸 0.45%，最高60°C。" }], steps: [{ label: "步骤 1", cn: "停止进浆，用水环路冲洗约15分钟。", en: "Stop stock feed, flush ~15 min." }, { label: "步骤 2", cn: "彻底清洁毛毯和辊。清洁刮刀片和堵塞喷淋嘴。", en: "Clean felt, rolls, doctor blades, clogged nozzles." }, { label: "步骤 3", cn: "长时间停机时释放毛毯和网张力。", en: "Relieve felt and wire tension for longer shutdowns." }]},
            lubrication: { icon: "🛢️", title: "润滑 Lubrication (4.8)", subtitle: "三个润滑计划表", sections: [
              { title: "回转装置", table: { headers: ["润滑点", "润滑剂", "间隔"], rows: [["回转轴承", "Mobilith SHC PM460", "每月"], ["铰链接头", "Mobilith SHC PM460", "600 h"], ["蜗轮箱", "ISO-VG 680", "2000 h"]] }},
              { title: "辊和刮刀", table: { headers: ["润滑点", "润滑剂", "补充"], rows: [["辊轴承", "Mobilith SHC PM460", "150 h"], ["刮刀轴承", "Mobilith SHC PM460", "150 h"]] }},
              { title: "喷淋管", table: { headers: ["润滑点", "润滑剂", "间隔"], rows: [["喷淋管摆动器", "锂皂基润滑脂", "150-300 h"]] }}
            ]},
            "blade-change": { icon: "🔪", title: "更换刮刀刀片 Blade Change (4.9)", steps: [{ label: "步骤 1", cn: "将刮刀从辊上抬起。", en: "Raise doctor from roll." }, { label: "步骤 2", cn: "佩戴防割手套，拉出旧刀片。", en: "Wear cut-resistant gloves, pull out old blade." }, { label: "步骤 3", cn: "插入新刀片，将刮刀设置到工作位置。", en: "Insert new blade, set doctor to operating position." }]},
            "swinging": { icon: "🔄", title: "摆动操作 Swinging (4.10)", subtitle: "流浆箱/胸辊/张紧辊摆动", alerts: [{ type: "danger", title: "⚠️ 夹持危险", content: "必须使用安全支撑装置。控制面板钥匙从OPERATION切换到SERVICE。" }], sections: [
              { title: "准备 + 提升胸辊", steps: [{ label: "步骤", cn: "松开毛毯张力。控制面板钥匙转SERVICE。起重机固定胸辊 → 拆卸螺栓 → 电动提升 → 固定销固定。", en: "Relieve felt tension. Turn key to SERVICE. Crane secure breast roll → detach bolts → raise → secure with pins." }]},
              { title: "四个工作位置", steps: [{ label: "换毯", cn: "释放锁定 → 摆动到换毯位置 → 锁定。", en: "Release → swing to felt changing → lock." }, { label: "清洁", cn: "摆动到清洁位置 → 锁定。", en: "Swing to cleaning → lock." }, { label: "换辊", cn: "摆动到换辊位置 → 锁定。", en: "Swing to roll change → lock." }, { label: "工作", cn: "解除锁定 → 摆回工作位置 → 锁定。", en: "Release → swing to operating → lock." }]}
            ]}
          },
          procedures: {
            "change-wire": { icon: "🕸️", title: "更换网 Wire Change (4.11.1)", alerts: [{ type: "danger", title: "⚠️ 重物吊装", content: "穿戴个人防护装备。不要在悬吊载荷下行走。" }], sections: [
              { title: "拆除旧网", steps: [{ label: "1", cn: "释放网张力。将胸辊和流浆箱向上运行。", en: "Relieve wire tension. Run breast roll and headbox upward." }, { label: "2", cn: "打开悬臂机架（操作侧）。拆除旧网。", en: "Open cantilever frame (OS). Remove old wire." }]},
              { title: "安装新网", steps: [{ label: "3", cn: "穿入新网。关闭悬臂机架。降下胸辊和流浆箱。张紧网至运行张力。", en: "Thread new wire. Close frame. Lower breast roll/headbox. Tension wire." }]}
            ]},
            "change-felt": { icon: "🧶", title: "更换毛毯 Felt Change (4.11.2)", alerts: [{ type: "danger", title: "⚠️ 重物吊装", content: "注意夹持点。穿戴防护装备。" }], steps: [{ label: "1", cn: "释放毛毯张力。打开悬臂机架。", en: "Relieve felt tension. Open cantilever frame." }, { label: "2", cn: "拆除旧毛毯。穿入新毛毯。关闭机架，张紧。", en: "Remove old felt. Thread new felt. Close frame, tension." }]},
            "change-rolls": { icon: "⚙️", title: "更换辊子 Roll Change (4.12)", subtitle: "10种辊子更换", alerts: [{ type: "danger", title: "⚠️", content: "成形辊重7500kg！停机锁定后操作。" }], children: [
              { title: "成形辊 2.1 (7500kg)", route: "maintenance-detail?id=roll-forming" },
              { title: "网辊/张紧辊/校正辊 2.2-2.4", route: "maintenance-detail?id=roll-wire" },
              { title: "胸辊 2.5", route: "maintenance-detail?id=roll-breast" },
              { title: "毛毯辊 2.6-2.10", route: "maintenance-detail?id=roll-felt" }
            ]},
            "roll-forming": { title: "更换成形辊 Forming Roll 2.1", steps: [{ label: "1", cn: "安装滑动管到悬臂上。安装移出轨道。", en: "Mount slip-on tubes, run-out rails." }, { label: "2", cn: "用起重机固定成形辊。拆卸轴承座螺栓。", en: "Secure roll with crane. Detach bearing bolts." }, { label: "3", cn: "沿轨道移出。按相反顺序安装。", en: "Run out on rails. Install reverse order." }]},
            "roll-wire": { title: "更换网辊/张紧辊/校正辊", steps: [{ label: "步骤", cn: "安装移出轨道 → 起重机固定辊 → 拆卸轴承座 → 沿轨道移出 → 反向安装。", en: "Mount rails → crane secure → detach housing → run out → reverse install." }]},
            "roll-breast": { title: "更换胸辊 Breast Roll 2.5", steps: [{ label: "步骤", cn: "需先释放网张力并打开悬臂。其余流程与上同。", en: "Relieve wire tension and open cantilever first. Same procedure." }]},
            "roll-felt": { title: "更换毛毯相关辊", steps: [{ label: "步骤", cn: "释放毛毯张力。安装轨道。固定辊。拆卸轴承座。移出。反向安装。", en: "Relieve felt tension. Mount rails. Secure roll. Detach housing. Run out. Reverse install." }]},
            "change-bearings": { icon: "🔩", title: "更换轴承 Bearing Change (4.13)", sections: [
              { title: "导辊轴承 (22319 CCK/W33 C3)", steps: [{ label: "步骤", cn: "拆卸轴承座。用液压手动泵推出轴承。液压螺母安装（Pstart 3.02 MPa, Ss 0.59 mm）。", en: "Detach housing. Push off with hydraulic pump. Mount with hydraulic nut (3.02 MPa, 0.59 mm)." }]},
              { title: "成形辊轴承 (22330 CCK/W33 C3)", steps: [{ label: "步骤", cn: "Pstart 5.28 MPa, Ss 0.9 mm。用液压螺母安装。", en: "Pstart 5.28 MPa, Ss 0.9 mm. Mount with hydraulic nut." }]}
            ]}
          }
        }
      }
    },

    // ============================================================
    // PRESS SECTION
    // ============================================================
    press: {
      icon: "⚙️",
      title: "TM-PrimePress Single EOM",
      shortTitle: "Press EOM",
      subtitle: "PrimePress 压榨部 · 操作与维护",
      info: "技术参数 · 6大部件 · 维护操作 · 47页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "网部、毛毯、真空压榨辊规格", route: "tech-data" },
          { icon: "🔧", title: "设备描述 Description", subtitle: "6大主要部件 · 技术工艺描述", route: "components" },
          { icon: "🛠", title: "维护 Maintenance", subtitle: "安全 · 检查 · 清洁润滑 · 更换操作", route: "maintenance" }
        ],
        // ======= PRESS TECHNICAL DATA =======
        technicalData: {
          sections: [{"title":"📊 网部数据 Wire Section","type":"data-table","rows":[{"label":"流浆箱宽度 Pond width","value":"3596 mm"},{"label":"最大工作速度 Max. operating speed","value":"1650 m/min"},{"label":"网最大张力 Max. wire tension","value":"10 N/mm"},{"label":"网宽 Wire width","value":"3541 mm"},{"label":"网长度 Wire length","value":"14000 mm"}]},{"title":"📊 毛毯数据 Felt Data","type":"data-table","rows":[{"label":"最大毛毯张力 Max. felt tension","value":"6 N/mm"},{"label":"毛毯宽 Felt width","value":"3800 mm"},{"label":"毛毯长度 Felt length","value":"36000 mm"}]},{"title":"📊 真空压榨辊 Suction Press Roll","type":"data-table","rows":[{"label":"直径 Diameter","value":"1410 mm"},{"label":"真空区数量 Number of suction zones","value":"1"},{"label":"线压（设计）Line force (design)","value":"110 N/mm"},{"label":"包胶 Cover","value":"PU"},{"label":"硬度 Hardness P&J","value":"14 ± 3"},{"label":"厚度 Thickness","value":"20 mm"}]},{"title":"📊 中高曲线 Cambering Curve","type":"text","content":"<p style=\"font-size:0.85rem;color:var(--color-text-secondary)\">详见下图 / See figure below</p>","image":"images/page04-img02.jpeg","imageCaption":"Fig. 1: Suction press roll – cambering curve / 图1：真空压榨辊-中高曲线"}],
          note: "数据来源 / Data source: ANDRITZ AG, Rev. 0, 2026"
        },
        // ======= PRESS COMPONENTS =======
        components: {"application":{"title":"应用领域 Field of Application","cn":"压榨部用于对纸幅的偏转、脱水，并将其压到扬克缸上。","en":"The press section is used to deflect, dewater, and press the paper web onto the yankee.","image":"images/page05-img02.jpeg","imageCaption":"Fig. 2: Press section / 图2：压榨部"},"overview":{"title":"主要部件 Main Components","image":"images/page06-img02.jpeg","imageCaption":"Fig. 3: Main components of the press section / 图3：压榨部主要部件","items":[{"num":1,"name":"真空压榨辊 Suction press roll","route":"component-detail?id=suction-press-roll"},{"num":2,"name":"扬克缸 Yankee","route":"component-detail?id=yankee"},{"num":3,"name":"集水盘 Water collecting tray","route":"component-detail?id=water-tray"},{"num":4,"name":"压力加载装置 Pressure loading device","route":"component-detail?id=pressure-device"},{"num":5,"name":"悬吊装置 Suspension device","route":"component-detail?id=suspension-device"},{"num":6,"name":"拆除车 Run-out carriage","route":"component-detail?id=runout-carriage"}]},"techDescription":{"title":"技术描述 Technological Description","cn":"压榨部用于将纸浆偏转、脱水以及压到扬克缸上。","en":"The press section is used to deflect, dewater and press the web onto the Yankee."},"suctionRollFunction":{"title":"真空压榨辊的作用 Function of the Suction Press Roll","cn":"真空压榨辊将粘在毛毯外侧的纸浆压在扬克缸上。纸浆是通过压力和真空，保持在扬克缸上。扬克缸会提前喷上一层涂层。","en":"The suction press roll presses the pulp web adhering to the outer side of the felt onto the Yankee. The pulp web is held on the Yankee by means of pressure and vacuum. The Yankee is sprayed beforehand with a coating layer.","subsections":[{"title":"脱水 Dewatering","cn":"在压榨区内，通过真空将毛毯和纸浆中的水通过辊壳上的钻孔吸入。在真空区后，在离心力的作用下，水喷飞溅进集水盘内，并将其带走。","en":"In the suction zone, the water in the felt and the web is sucked through the bore holes in the roll shell by means of vacuum. After the suction zone, the water is sprayed by centrifugal force into the water collecting tray and carried off."},{"title":"密封和润滑 Sealing and Lubricating","cn":"真空部由纵向和横向密封条分隔。密封条通过气动方式，压在辊壳的内壁上，并通过润滑水喷淋器进行润滑。","en":"The vacuum sector is delimited by longitudinal and transverse sealing strips. The sealing strips are pressed pneumatically onto the inside wall of the roll shell and lubricated with water by a lube shower."},{"title":"真空箱 Suction Box","cn":"整个真空箱可在真空压榨辊内旋转，以设定吸入角。这意味着受密封条限制的真空区的起始位置和终止位置——可以通过旋转整个真空箱来改变。","en":"The entire suction box can be rotated inside the suction press roll in order to set the suction angle. This means that the beginning and the end of the suction zone can be changed by rotating the entire suction box."},{"title":"进一步处理 Further Processing","cn":"然后脱水和压榨后的纤维，将以纸的形式附着在扬克缸上开始后续的干燥。","en":"The dewatered and pressed fibers now adhering to the Yankee in the form of a web are subsequently dried."}]},"componentDetails":{"suction-press-roll":{"title":"真空压榨辊 Suction Press Roll (1)","description":{"cn":"浆板脱水并将其传送到扬克缸处。","en":"Dewatering and transferring the pulp web to the yankee."},"image":"images/page07-img10.jpeg","imageCaption":"Fig. 4: Suction press roll / 图4：真空压榨辊","parts":[{"id":"1a","name":"辊体 Roll shell"},{"id":"1b","name":"辊筒轴颈 Roll journal"},{"id":"1c","name":"轴承 Bearings"},{"id":"1d","name":"真空箱调整 Suction box adjustment"},{"id":"1e","name":"真空箱 Suction box"},{"id":"1f","name":"轴承座 Supports"},{"id":"1g","name":"真空箱管件 Suction box fittings"},{"id":"1h","name":"密封条 Sealing strips"},{"id":"1j","name":"真空管道连接件 Suction connection piece"},{"id":"1k","name":"滑块/移出轮 Sliding blocks / run-out rolls"}],"subsections":[{"title":"2.2.1.1 辊壳和轴头 Roll Shell (1a) and Roll Journals (1b)","cn":"辊壳（1a）设有多个钻孔，在真空的作用下，水通过钻孔从毛毯和纸浆上吸出。开孔面积大约占19.9%。辊壳用螺栓固定到辊子轴头上（1b）。","en":"The roll shell (1a) has bore holes through which the water is sucked out of the felt and the pulp web by vacuum. The open surface area is approximately 19.9%. The roll shell is bolted to the roll journals (1b).","image":"images/page08-img02.jpeg","imageCaption":"Fig. 5: Roll shell / 图5：辊体"},{"title":"2.2.1.2 轴承 Bearing (1c)","cn":"轴承座和带圆锥轴承座的自动调心滚珠轴承。在操作侧，轴承被设计成可动轴承，而在驱动侧，它们被设计成固定轴承。辊子的轴承由中央油润滑系统润滑，并用迷宫环密封。","en":"Bearing housings and spherical roller bearings with tapered seats. On the operating side, the bearings are designed as floating bearings, while on the drive side, they are designed as fixed bearings.","image":"images/page08-img04.jpeg","imageCaption":"Fig. 6: Drive side and operator side bearing / 图6：轴承"},{"title":"2.2.1.3 真空箱调整 Suction Box Adjustment (1d)","cn":"真空箱可绕其纵轴心旋转。使用蜗杆传动装置调整所需的位置。蜗杆传动装置利用提供的插在方颈处棘轮操作。真空箱的位置可以从刻度上读出。","en":"The suction box can be pivoted round its longitudinal axis. The desired position is set using a worm drive operated with the ratchet supplied.","image":"images/page09-img02.jpeg","imageCaption":"Fig. 7: Suction box adjustment / 图7：真空箱调整"},{"title":"2.2.1.4 带密封带的真空箱 Suction Box (1e) with Sealing Strips (1h)","cn":"真空箱（1e）位于辊壳（1a）内。真空区用纵向密封条（1h1）和边缘密封条（1h2）密封。密封条通过空气软管（1h3），被气压压在辊体上，并用润滑喷淋管（1h4）供应的水进行润滑。","en":"The suction box (1e) is located in the roll shell (1a). The suction zone is sealed off with longitudinal sealing strips (1h1) and edge sealing strips (1h2).","image":"images/page09-img03.jpeg","imageCaption":"Fig. 8: Suction box with sealing strips / 图8：带密封带的真空箱"},{"title":"2.2.1.5 真空箱管件 Suction Box Fittings (1g)","cn":"操作侧的真空箱管件包含真空显示、压缩空气显示、润滑水接口、密封条用压缩空气管线、真空箱角度显示和移出轮位置显示。","en":"The suction box fittings on the operator side include vacuum display, compressed air display, lubricating water connection, compressed air line for sealing strips, suction box angle display, and run-out rolls display.","image":"images/page10-img02.jpeg","imageCaption":"Fig. 9: Suction box fittings / 图9：真空箱管件"},{"title":"2.2.1.6 真空连接件 Suction Connection Piece (1j)","cn":"通过真空管道连接件施加真空，水在抽真空时带走。","en":"The vacuum is applied through the suction connection piece and the water extracted by suction is carried off.","image":"images/page11-img02.jpeg","imageCaption":"Fig. 10: Suction connection piece / 图10：真空连接件"}]},"yankee":{"title":"扬克缸 Yankee (2)","description":{"cn":"扬克缸接收从真空压榨辊来的纸浆。详见干燥部文档。","en":"The Yankee receives the pulp web from the suction press roll. See TISSUE MACHINE/DRYING SECTION."}},"water-tray":{"title":"集水盘 Water Collecting Tray (3)","function":{"cn":"收集并带走抽真空带来的喷淋水。","en":"Collecting and carrying off the shower water removed by suction."},"design":{"cn":"焊接钢结构。在顶部边缘安装两个挡水条（3a），用来挡喷水，使来自真空压榨辊的水在离心力的作用下，通过钻孔流出，进入集水盘。","en":"Welded steel structure. Two strip (3a) is mounted at the top edge that deflects the water jet into the water collecting tray."},"image":"images/page12-img02.jpeg","imageCaption":"Fig. 11: Water collecting tray / 图11：集水盘"},"pressure-device":{"title":"压力加载装置 Pressure Loading Device (4)","function":{"cn":"将真空压榨辊压到扬克缸上。","en":"Pressing the suction press roll onto the Yankee."},"design":{"cn":"支承在枢轴轴承上的两个压臂（4a）是通过气囊（4b）抬起和降低。在操作侧，有些间隔装置（4c）在毛毯更换时必须拆除。在维护工作中，可通过固定销（4d）使真空压榨辊固定在安全位置。","en":"Two pressing levers (4a) supported in pivot bearings, on which the suction press roll (1) is mounted, are raised and lowered by air bellow (4b)."},"image":"images/page13-img02.jpeg","imageCaption":"Fig. 12: Pressure loading device / 图12：压力加载装置"},"suspension-device":{"title":"悬吊装置 Suspension Device (5)","function":{"cn":"悬吊装置用于拆除和安装真空压榨辊和集水盘以及在更换毛毯时，升起真空压榨辊。","en":"The suspension device is used to dismount and mount the suction press roll and the water collecting tray."},"design":{"cn":"两个不锈钢轨道（5a）分别安装机架的在操作侧和传动侧。每条钢轨安装有一台小车（5b）。在维修工作中，每台小车安装一台链式提升机。","en":"Two stainless rails (5a), mounted on the operator and drive sides. A trolley (5b) is mounted for each rail."},"image":"images/page14-img02.jpeg","imageCaption":"Fig. 13: Suspension device / 图13：悬吊装置"},"runout-carriage":{"title":"拆除车 Run-out Carriage (6)","function":{"cn":"拆除集水盘和真空压榨辊。","en":"Running out the water collecting tray and the suction press roll."},"design":{"cn":"在机器下面安装一条钢轨（6a）。在操作侧，在拆除工作期间，增加一条钢轨（6b）。两个拆除车（6c）通过连杆（6d）连接。","en":"A rail (6a) is mounted underneath the machine. On the operator side, an additional rail (6b) is attached during removal work."},"image":"images/page15-img03.jpeg","imageCaption":"Fig. 14: Run-out carriage / 图14：拆除车"}}},
        // ======= PRESS MAINTENANCE =======
        maintenance: {"topics":{"general":{"icon":"📋","title":"总则 General","subtitle":"维护责任、服务联系方式","content":{"cn":"本章对由运营公司负责的维护和保养作了描述。安德里茨有限公司服务部负责帮助您进行故障排除以及各种维护和维修工作。","en":"This chapter describes the maintenance and upkeep, which are the responsibility of the operating company."}},"safety":{"icon":"⚠️","title":"安全条例 Safety Regulations","subtitle":"作业安全规定与个人防护","notes":[{"cn":"应当遵守各项事故预防规定。","en":"All applicable accident prevention rules must be observed."},{"cn":"不要在悬吊的负荷下走动！站在悬吊的负荷下是非常危险的，因而严格禁止！","en":"Do not step or walk below suspended loads!"},{"cn":"只能在设备安全停机之后实施维护、保养作业。","en":"Maintenance and service work may only be performed when the machine is shut down securely."},{"cn":"维修和保养必须由受过专门训练的熟练人员来完成。电气设备的所有作业毫无例外，必须由熟练的电工进行。","en":"Maintenance and service work must be carried out by specially trained, skilled personnel only."}],"alerts":[{"type":"warning","title":"喷淋器 Showers","content":"从喷淋器溅出的液体。穿戴个人防护装备！切勿将手伸进这些设备！"},{"type":"warning","title":"刮刀维护 Doctor Maintenance","content":"夹持、受伤的危险。开始维护作业之前，通过手动阀门切断气源！"},{"type":"warning","title":"刮刀片 Doctor Blades","content":"刮刀片割伤。更换刀片时佩戴防切割手套！"}]},"routine-checks":{"icon":"✅","title":"日常检查 Routine Checks","subtitle":"设备停机后的检查项目","table":{"headers":["组件 Component","检查 Checks","措施 Action"],"rows":[["毛毯 Felt","检查裂纹、孔洞、起皱迹象。","必要时更换"],["刮刀片 Doctor blades","检查是否出现磨损。清洁接触表面。","调平或必要时更换"],["真空接头 Vacuum connections","检查泄漏。","—"],["辊 Rolls","检查是否发生损坏。","重新研磨或必要时更换"],["真空压榨辊外壳钻孔","按需要进行清洁。","—"]]}},"maintenance-schedule":{"icon":"📅","title":"维护计划 Maintenance Schedule","subtitle":"每周/每月/每半年/每年","sections":[{"title":"每周 Weekly","table":{"headers":["组件","活动"],"rows":[["毛毯","检查裂纹、孔洞和起皱迹象。"],["辊","检查是否发生损坏。"],["刮刀片","检查磨损。"],["真空系统","检查泄漏。"]]}},{"title":"每月 Monthly","table":{"headers":["组件","活动"],"rows":[["轴承","检查温度。测量振动。检查异常噪音。"],["紧急停机开关","检查功能。"],["真空压榨辊的辊罩","目视检查裂纹和磨损。"]]}},{"title":"每6个月","table":{"headers":["组件","活动"],"rows":[["液压缸","检查泄漏、磨损、功能。"],["螺旋/螺栓","检查并拧紧。"]]}},{"title":"每年","table":{"headers":["组件","活动"],"rows":[["真空箱","拆卸和清洁。"],["真空压榨辊的辊罩","重新研磨（按需要）。"]]}}]},"fasteners":{"icon":"🔩","title":"紧固件 Fasteners","subtitle":"扭矩数据与螺栓规范","table":{"headers":["螺纹","5.6","8.8","A4-50","A4-70"],"rows":[["M8","8 Nm","17 Nm","6 Nm","12 Nm"],["M10","16 Nm","34 Nm","11 Nm","24 Nm"],["M12","27 Nm","58 Nm","19 Nm","41 Nm"],["M16","66 Nm","140 Nm","46 Nm","99 Nm"],["M20","129 Nm","275 Nm","90 Nm","193 Nm"]]},"alerts":[{"type":"warning","title":"螺钉锁紧不正确","content":"螺钉锁紧不正确可导致机器损坏。必须遵循图纸或表格中给出的安装数值！"}]},"cleaning":{"icon":"🧹","title":"清洁 Cleaning","subtitle":"清洁方法与安全注意事项","alerts":[{"type":"danger","title":"化学清洁剂","content":"错误使用化学清洁剂会导致危险！应当佩戴个人防护装备！"},{"type":"info","title":"清理不当","content":"只能使用规定的清洁剂！防止电气零件浸水！切勿用高压力设备清理涂装表面！"}],"sections":[{"title":"清洁时间与方法","paragraphs":[{"cn":"设备停机以后，应当彻底清理流浆箱以免物料干结。这样能够防止发酵、滋生细菌。"}]},{"title":"适用的清洁剂","table":{"headers":["清洁剂","浓度","温度"],"rows":[["HCl (盐酸)","2-5%","最高60°C"],["NaOH (苛性钠)","2-5%","最高60°C"],["硫酸","0.45%","最高60°C"]]}},{"title":"冲洗 Flushing Out","steps":[{"label":"步骤 a","cn":"停止送料。","en":"Shut down stock feed."},{"label":"步骤 b","cn":"如果使用化学清洁剂：将清洁剂添加到水环路中。","en":"Add cleaning agent to the water loop."},{"label":"步骤 c","cn":"打开水环路，冲洗系统15分钟左右。","en":"Open water loop and flush the system for approx. 15 minutes."}]}]},"lubrication":{"icon":"🛢️","title":"润滑 Lubrication","subtitle":"润滑计划表与润滑点","content":{"cn":"在启动之前，检查所有润滑点（特别是轴承和齿轮）是否都添加了合适的润滑剂。","en":"Before start-up, check whether all lubrication points have been filled with the appropriate lubricants."},"image":"images/page28-img02.jpeg","imageCaption":"Fig. 15: Lubrication points / 图15：润滑点","table":{"headers":["项目","数量","名称","类型","首次加注","重新加注"],"rows":[["1","2","耐磨轴承","ISO-VG 320","5 l/min","—"],["2","2","蜗轮轴承","Mobilith SHC PM460","—","2 g / 1200 h"],["3","2","压上装置滑动轴承","Mobilith SHC PM460","—","2-4 g / 600 h"]]}}},"procedures":{"change-suction-roll":{"icon":"🔄","title":"更换真空压榨辊 (3.9)","subtitle":"拆除与安装","tools":["工具","提升装置","网/绳","辊更换零件","辊"],"alerts":[{"type":"danger","title":"⚠️ 夹住与辗压","content":"不要将手放在悬吊载荷下方！穿戴个人防护装备！"},{"type":"danger","title":"⚠️ 作业时坠落","content":"使用稳定的梯子和平台！穿戴个人防护装备！"}],"notes":[{"cn":"所有有关人员必须收到准确说明。","en":"All personnel must receive precise instructions."},{"cn":"更换辊所需的所有工具和辅助设备必须在工作开始前完成检查并准备工作。","en":"All tools and auxiliary equipment must be checked and kept at the ready."}],"sections":[{"title":"3.9.1 拆除真空压榨辊 Removing","image":"images/page31-img03.jpeg","imageCaption":"Fig. 16-17: Starting position / 开始位置","steps":[{"label":"开始","cn":"机器内无毛毯。机器停机。","en":"No felt. Machine shut down."},{"label":"步骤 b","cn":"真空压榨辊（1）向下摆动并固定（2）。气胎进水管关闭。","en":"Suction press roll (1) swung down and secured (2)."},{"label":"步骤 c-h","cn":"拆除集水盘接口 → 放置拆除车(9) → 安装顶部附件(A) → 悬吊拆卸装置(4) → 连接吊带(6) → 拆紧固螺钉(8) → 将集水盘拉出并抬出。","en":"Remove tray connections → place carriages → mount attachments → suspend device → attach straps → detach screws → pull tray out."}]},{"title":"安装抗扭装置 + 拆除辊","image":"images/page33-img02.jpeg","imageCaption":"Fig. 18-19: Anti-torsion device & Removing","steps":[{"label":"抗扭 1-2","cn":"旋转外壳对齐孔 → 安装旋转锁(10)。","en":"Rotate shell → mount rotation locks."},{"label":"拆除 a-j","cn":"放置拆除车 → 悬吊辊(吊带G/钢丝绳S) → 松开紧固螺旋(11) → 抬起推进 → 放置拆除车 → 旋入固定 → 拉出抬出。","en":"Place carriages → suspend roll → detach screws → lift/push → lower onto carriages → screw down → pull out."}]},{"title":"3.9.2 安装","paragraphs":[{"cn":"按与拆除相反的顺序执行。","en":"Carry out in reverse order."}]}]},"change-components":{"icon":"🔧","title":"更换真空压榨辊部件 (3.10)","subtitle":"蜗轮 · 真空箱 · 密封件 · 轴承","alerts":[{"type":"info","title":"","content":"ANDRITZ建议仅在真空压榨辊从机器上拆除后更换部件。真空压榨辊应放置在辊体上，轴承座表面朝下。"}],"sections":[{"title":"将真空箱旋转入拆除位置","image":"images/page34-img03.jpeg","imageCaption":"Fig. 20: Rotate suction box / 图20：将真空箱旋转到拆除位置","steps":[{"label":"步骤 a-c","cn":"松开蜗杆传动螺栓(1) → 用棘轮转真空箱方颈(2)直到标记(3)在6点钟位置 → 拧紧螺旋(1)锁定。","en":"Loosen bolt (1) → turn square neck (2) with ratchet until marking (3) at 6 o'clock → tighten screw (1)."}]}],"children":[{"icon":"⚙️","title":"3.10.1 更换蜗轮 Changing Worm Gear","route":"maintenance-detail?id=change-worm-gear"},{"icon":"📦","title":"3.10.2 拆除真空箱 Dismounting Suction Box","route":"maintenance-detail?id=dismount-suction-box"},{"icon":"📥","title":"3.10.3 装入真空箱 Running Suction Box In","route":"maintenance-detail?id=mount-suction-box"}]},"change-worm-gear":{"title":"更换蜗轮 (3.10.1)","image":"images/page36-img02.jpeg","imageCaption":"Fig. 21: Removing worm gear / 图21：拆除蜗轮","steps":[{"label":"a-c","cn":"松螺栓(1) → 拆夹紧环(2) → 拆压力件(3)。","en":"Loosen bolts (1) → remove ring (2) → remove piece (3)."},{"label":"d-f","cn":"拆螺钉(4) → 推开上盖(5)。","en":"Remove screws (4) → push off covers (5)."},{"label":"g-m","cn":"旋出蜗杆(6)拆轴承(7)密封盘(8) → 拆盖板(9)螺钉(10) → 拆螺栓(11)蜗轮盖(12) → 拆螺栓(13) → 推开蜗轮(14)。","en":"Turn out worm (6) → remove bearing/seal → remove plate (9) → bolts (11) cover (12) → bolts (13) → push off wheel (14)."}],"footerNote":"按反向顺序重新装配。所有零件清洁并润滑。检查密封件和配合处磨损。","alerts":[{"type":"info","title":"安装注意","content":"安装不当可能造成损坏。所有零件必须清洁并润滑。检查密封件、密封表面和配合处磨损。"}]},"dismount-suction-box":{"title":"拆除真空箱 (3.10.2)","prerequisites":[{"cn":"已拆除真空压榨辊并放置在合适支架上。","en":"Suction press roll dismounted and placed on support."},{"cn":"抗扭装置已安装。真空箱在拆除位置。","en":"Anti-torsion devices mounted. Suction box in removal position."}],"sections":[{"title":"推开操作侧辊筒轴颈","image":"images/page38-img02.jpeg","imageCaption":"Fig. 22: Push off operator-side roll journal / 图22：推出操作侧轴头","steps":[{"label":"a-e","cn":"连接起重机(1) → 拆盖环(2) → 松开螺母(3)约10mm → 拆闭合销 → 安装顶起螺栓(4)。","en":"Attach crane (1) → remove ring (2) → loosen nuts (3) ~10mm → remove pins → mount forcing screws (4)."},{"label":"f-h","cn":"交替拧紧顶起螺栓压出轴头(5)直到辊体(6)与轴头(5)分离 → 拆螺母(3) → 推出轴头。","en":"Alternately tighten screws → push off journal (5) → remove nuts (3) → push journal out."}]},{"title":"移出真空箱","image":"images/page39-img02.jpeg","imageCaption":"Fig. 23: Running suction box out / 图23：移出真空箱","steps":[{"label":"a-e","cn":"向操作侧拉真空箱(1)直到移出轮(3)停在辊壳(4)内表面 → 继续拉出 → 用吊带(5)悬吊 → 完全移出 → 放置在合适支撑上。","en":"Pull box (1) towards OS → run-out rolls on shell → pull further → suspend with belt (5) → run out completely → place on support."}]}]},"mount-suction-box":{"title":"装入真空箱 (3.10.3)","paragraphs":[{"cn":"按拆除的反序执行。确保所有装配表面清洁。传动侧真空箱颈部和操作侧轴头座必须用石墨润滑脂润滑！","en":"Carry out in reverse order. Clean all fitting surfaces. Lubricate drive-side neck and operator-side journal seat with graphite grease!"}],"alerts":[{"type":"info","title":"注意","content":"安装不当可能造成损坏。所有零件清洁并润滑。真空箱必须每年取出清洁一次。"}]},"change-seals":{"icon":"🔒","title":"更换密封件 (3.11)","prerequisites":[{"cn":"更换密封件前必须拆下真空箱。","en":"Suction box must be removed before changing seals."}],"image":"images/page41-img03.jpeg","imageCaption":"Fig. 24: Changing sealing strips / 图24：更换密封带","steps":[{"label":"a-c","cn":"拉出纵向密封条(1) → 松螺栓(2)抬安装架(3) → 拉出边缘密封条(4)。","en":"Pull out longitudinal strips (1) → loosen bolts (2) lift mounting (3) → pull out edge strips (4)."},{"label":"d-e","cn":"检查空气软管(5)必要时更换 → 插入新密封条。","en":"Check hoses (5) replace if needed → insert new seals."}],"alerts":[{"type":"warning","title":"小心","content":"安装不当可能造成损坏。所有零件清洁并润滑。检查密封件、密封表面和配合处磨损。"}]},"change-bearings":{"icon":"🔩","title":"更换轴承 (3.12)","subtitle":"操作侧 & 传动侧轴承","alerts":[{"type":"danger","title":"⚠️ 夹住与辗压","content":"不要将手放在悬吊载荷下方！穿戴个人防护装备！"}],"sections":[{"title":"3.12.1 拆除操作侧轴承","image":"images/page43-img03.jpeg","imageCaption":"Fig. 25: Changing operator-side bearing / 图25：更换操作侧轴承","steps":[{"label":"a-d","cn":"拆卸蜗杆传动 → 松螺钉(1)拆外轴承盖(2) → 拆安全护罩(3) → 拆螺栓(4)拆轴承座(5)。","en":"Dismount worm drive → detach screws (1) remove cover (2) → remove safety cover (3) → detach bolts (4) remove housing (5)."},{"label":"e-j","cn":"拧入固定螺钉(6)到锁紧螺母(7) → 松锁紧螺钉(12) → 冲击扳手松锁紧螺母2-3圈 → 液压泵压出轴承(9) → 拆泵堵孔 → 拆螺母和轴承 → 拆内轴承盖(10)迷宫环(11)。","en":"Screw retaining screws (6) into nut (7) → loosen locking screws → loosen nut 2-3 turns → hydraulic pump push off bearing → remove nut and bearing → remove inner cover (10) and ring (11)."}]},{"title":"3.12.2 拆除传动侧轴承","image":"images/page44-img03.jpeg","imageCaption":"Fig. 26: Changing drive-side bearing / 图26：更换传动侧轴承","steps":[{"label":"a-j","cn":"松螺栓(1)拆法兰(2) → 松螺钉(3)拆外轴承盖(4) → 拆安全护罩(5) → 拆螺栓(6)拆轴承座(7) → 液压泵压出轴承(11) → 拆螺母和轴承 → 拆内轴承盖(12)迷宫环(13)。","en":"Unscrew bolts (1) remove flange (2) → detach screws (3) remove cover (4) → remove safety cover (5) → detach bolts (6) remove housing (7) → push off bearing → remove nut and bearing → remove inner cover (12) and ring (13)."}]},{"title":"3.12.3 安装轴承","image":"images/page45-img03.jpeg","imageCaption":"Fig. 27: Mounting bearing / 图27：安装轴承","steps":[{"label":"a-e","cn":"涂低粘度润滑油 → 液压螺母移至开始位置(Pstart: 1.02 MPa) → 刻度表设\"0\" → 液压螺母推轴承到Ss=2.894 mm。","en":"Apply low-viscosity oil → move to start (Pstart: 1.02 MPa) → set dial to \"0\" → push bearing to Ss=2.894 mm."}],"table":{"headers":["轴承位置","轴承类型","Pstart","Ss"],"rows":[["操作侧","SKF 239/600 CAK/C083W33","1.02 MPa","2.894 mm"],["传动侧","SKF 239/600 CAK/C083W33","1.02 MPa","2.894 mm"]]}}]},"doctor-maintenance":{"icon":"🔪","title":"刮刀维护 Doctor (3.13)","content":{"cn":"关于刮刀片的设置、更换以及安全性，请参见供应商文件。","en":"For setting, changing doctor blades and safety, see supplier documentation."},"image":"images/page46-img02.jpeg","imageCaption":"Fig. 28: Doctor / 图28：真空压榨辊用刮刀"},"clean-drill-holes":{"icon":"🧽","title":"清洁壳体钻孔 (3.14)","paragraphs":[{"cn":"壳体中的钻孔在操作过程中可能会堵塞。必须定期目视检查。按需要和在每个毛毯更换后进行清洁。","en":"Bores in the shell may become clogged. Visual check must be conducted regularly. Clean as required and after each felt change."}],"steps":[{"label":"步骤 a","cn":"将机器切换到爬行速度。","en":"Switch to creep speed."},{"label":"步骤 b","cn":"用清洁枪（最多40巴）从外面清洁钻孔。","en":"Spray through drill holes from outside with cleaning lance (40 bar max)."}],"alerts":[{"type":"info","title":"注意","content":"清洗前切换到爬行速度！"},{"type":"info","title":"注意","content":"如果真空显示超过工作压力，钻孔就会堵塞。应定期清洁辊体上的钻孔！"},{"type":"info","title":"研磨辊体","content":"拆除真空压榨辊后，插入驱动轴颈旋转辊，研磨辊体。弯曲曲线 >> 技术参数"}]}}}
      }
    }
  }
};

// 将数据挂载到 window 对象
window.APP_DATA = APP_DATA;
window.APP_DATA_LOADED = true;
