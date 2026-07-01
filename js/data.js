/**
 * TM EOM Suite - 完整文档数据
 * Tissue Machine | Headbox | Crescent Former | Press Section
 * 安德里茨卫生纸机操作与维护说明书
 */

const APP_DATA = {
  machines: {

    // ============================================================
    // TISSUE MACHINE (General)
    // ============================================================
    general: {
      icon: "🏭",
      title: "Tissue Machine EOM",
      shortTitle: "TM EOM",
      subtitle: "PrimeLine Compact M1600 · 卫生纸机总览",
      info: "技术参数 · 安全 · 安装 · 操作 · 故障排除 · 68页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "机型、产能、速度、宽度等规格", route: "tech-data" },
          { icon: "🛡️", title: "安全 Safety", subtitle: "安全条例、危险标志、个人防护", route: "maintenance-detail?id=safety" },
          { icon: "📦", title: "安装 Installation", subtitle: "运输、保管、安装、冷测试", route: "maintenance-detail?id=installation" },
          { icon: "▶️", title: "操作 Operation", subtitle: "清洁、启动、停机、DCS控制、机器设置", route: "maintenance-detail?id=operation" },
          { icon: "📈", title: "图表与曲线 Diagrams", subtitle: "流浆箱压力图、扬克缸特性曲线", route: "maintenance-detail?id=diagrams" },
          { icon: "⚠️", title: "故障排除 Troubleshooting", subtitle: "流浆箱、成形器、压榨部、扬克缸、卷纸机故障", route: "maintenance-detail?id=troubleshooting" }
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
            title: "Tissue Machine 卫生纸机",
            cn: "安德里茨 PrimeLine Compact M1600 卫生纸机，包含流浆箱、新月型成型器、压榨部、扬克缸和卷纸机。",
            en: "ANDRITZ PrimeLine Compact M1600 Tissue Machine, including Headbox, Crescent Former, Press Section, Yankee, and Reel."
          },
          paragraphs: [
            { cn: "详细部件信息请参见各专项文档（流浆箱、成型器、压榨部）。", en: "For detailed component information, refer to the respective machine documents (Headbox, Former, Press Section)." }
          ]
        },
        maintenance: {
          topics: {
            safety: {
              icon: "🛡️", title: "安全 Safety (第2章)", subtitle: "安全条例 · 危险标志 · 防护装备",
              alerts: [
                { type: "danger", title: "基本安全", content: "必须遵守所有事故预防规定。设备只能在安全停机后进行维护。所有能源供应必须断开。" }
              ],
              sections: [
                { title: "安全装置 Safety Devices", paragraphs: [{ cn: "紧急停机装置必须功能正常。安全装置不得被拆除、绕过或使其失效。维修后必须重新安装所有安全装置。", en: "EMERGENCY STOP devices must function properly. Safety devices must not be removed, bypassed, or disabled. All safety devices must be reinstalled after maintenance." }]},
                { title: "个人防护装备 PPE", paragraphs: [{ cn: "作业时必须穿戴个人防护装备：安全帽、防护手套、安全鞋、护目镜、听力保护。", en: "Personal protective equipment must be worn: safety helmet, protective gloves, safety shoes, goggles, hearing protection." }]},
                { title: "温度与噪音", paragraphs: [{ cn: "注意设备高温表面（扬克缸）。噪音水平可能超过85 dB(A)，需佩戴听力保护装置。", en: "Beware of hot surfaces (Yankee). Noise levels may exceed 85 dB(A); wear hearing protection." }]},
                { title: "电气与液压设备", paragraphs: [{ cn: "电气作业只能由熟练电工执行。液压和气动设备维修前必须释放压力。焊接作业需咨询ANDRITZ。", en: "Electrical work must be done by skilled electricians. Depressurize hydraulic and pneumatic systems before maintenance. Consult ANDRITZ before welding." }]}
              ]
            },
            installation: {
              icon: "📦", title: "安装 Installation (第4章)", subtitle: "运输 · 保管 · 安装 · 冷测试 · 启动",
              sections: [
                { title: "运输 Transport (4.3)", paragraphs: [{ cn: "使用合适的吊具和绳索。辊子吊装时注意使用专用吊点。不超载起重机。", en: "Use appropriate lifting gear and ropes. Use dedicated lifting points for rolls. Do not exceed crane capacity." }]},
                { title: "保管 Safekeeping (4.4)", paragraphs: [{ cn: "施胶辊应避光、防潮、防冻保存。避免接触化学品和油类。定期旋转以防变形。", en: "Store rubberised rolls away from light, moisture, and frost. Avoid contact with chemicals and oils. Rotate periodically to prevent deformation." }]},
                { title: "安装 (4.5)", paragraphs: [{ cn: "按安装图进行设备安装。确保足够维护空间。安装外围设备（管道、电气、气动）。", en: "Install according to assembly drawings. Ensure adequate maintenance space. Install peripheral equipment (piping, electrical, pneumatic)." }]},
                { title: "冷测试 Cold Test (4.7)", paragraphs: [{ cn: "首次启动前必须进行冷测试：检查所有连接、润滑点、转动方向、安全装置功能。", en: "Cold test required before initial start-up: check all connections, lubrication points, rotation direction, safety device function." }]},
                { title: "启动 Start-up (4.12)", paragraphs: [{ cn: "启动前确认所有前提条件。按启动顺序逐步操作。记录运行参数。", en: "Verify all prerequisites before start-up. Follow start-up sequence step by step. Record operating parameters." }]}
              ]
            },
            operation: {
              icon: "▶️", title: "操作 Operation (第4章续)", subtitle: "清洁 · 启动停机 · 机器设置 · DCS控制",
              sections: [
                { title: "清洁 Cleaning (4.17)", paragraphs: [{ cn: "每次停机后彻底清洁。流浆箱不能用尖锐工具。用清水和许可清洁剂冲洗约15分钟。", en: "Thorough cleaning after each shutdown. No sharp tools for headbox. Flush with fresh water and approved cleaning agents for ~15 min." }]},
                { title: "启动 Starting (4.18)", paragraphs: [{ cn: "检查所有安全装置。确保所有防护罩就位。通知所有人员。按DCS启动程序操作。", en: "Check all safety devices. Ensure all guards in place. Notify all personnel. Follow DCS start-up sequence." }]},
                { title: "停机 Shutdown (4.19)", paragraphs: [{ cn: "按DCS停机程序操作。停止进浆、清洗系统、释放张力、关闭蒸汽。", en: "Follow DCS shutdown sequence. Stop stock feed, clean system, relieve tensions, shut off steam." }]},
                { title: "紧急停机后重启 (4.20)", paragraphs: [{ cn: "排除故障原因。检查设备有无损坏。确认安全后再重新启动。", en: "Eliminate fault cause. Check for equipment damage. Confirm safety before restarting." }]},
                { title: "操作条件 Operating Conditions (4.21)", paragraphs: [{ cn: "遵守设计参数（速度、温度、压力）。定期检查运行状态。记录异常情况。", en: "Observe design parameters (speed, temperature, pressure). Regularly check operating conditions. Log anomalies." }]}
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
                { title: "流浆箱动态压力图 (4.23.1)", paragraphs: [{ cn: "显示流浆箱在不同速度下的背压关系。用于设定正确的运行参数。", en: "Shows headbox back-pressure relationship at different speeds. Used for setting correct operating parameters." }]},
                { title: "扬克缸加热过程 (4.23.2)", paragraphs: [{ cn: "手动加热。爬行速度约30 m/min。最大加热速率30°C/h。冷凝水90°C时增压。2 bar蒸汽/约120°C表面温度时准备就绪。", en: "Manual heating. Crawl speed ~30 m/min. Max heating rate 30°C/h. Pressure boost at 90°C condensate. Ready at 2 bar steam / ~120°C surface temp." }]},
                { title: "蒸汽压力特性曲线", paragraphs: [{ cn: "3.5 bar (1112 m/min) · 4 bar (1200 m/min) · 8.5 bar (1600 m/min) · 8.8 bar (1500 m/min) · 9.5 bar (1538 m/min)", en: "Characteristics at 3.5/4/8.5/8.8/9.5 bar steam pressure for various speeds." }]}
              ]
            },
            troubleshooting: {
              icon: "⚠️", title: "操作故障 Troubleshooting (4.26)", subtitle: "流浆箱 · 成型器 · 压榨部 · 扬克缸 · 卷纸机故障排查",
              sections: [
                { title: "流浆箱 Headbox Faults (4.26.1)", paragraphs: [{ cn: "故障排查表涵盖：纤维絮聚、横幅定量不均、唇口堵塞等问题。", en: "Troubleshooting covers: fiber flocculation, uneven cross-profile basis weight, slice lip clogging." }]},
                { title: "新月型成型器 Crescent Former (4.26.2)", paragraphs: [{ cn: "故障排查表涵盖：网跑偏、网起皱、脱水不均、毛毯问题等。", en: "Troubleshooting covers: wire misalignment, wire wrinkling, uneven dewatering, felt issues." }]},
                { title: "压榨部 Press Section (4.26.3)", paragraphs: [{ cn: "故障排查表涵盖：真空度不足、辊面磨损、密封条泄漏、毛毯寿命缩短等。", en: "Troubleshooting covers: insufficient vacuum, roll cover wear, sealing strip leaks, reduced felt life." }]},
                { title: "扬克缸 Yankee (4.26.4–4.26.5)", paragraphs: [{ cn: "故障排查：涂层不均、干燥效率下降。停电时：关闭蒸汽、关闭燃烧器、收回热风罩、停止喷淋、抬起刮刀、每30分钟转1/4圈。", en: "Troubleshooting: uneven coating, reduced drying efficiency. Power failure: shut steam, switch off burner, retract hood, stop showers, lift doctors, rotate quarter-turn every 30 min." }]},
                { title: "卷纸机 Reel (4.26.6)", paragraphs: [{ cn: "故障排查表涵盖：卷纸不齐、张力问题、纸芯固定故障。", en: "Troubleshooting covers: misaligned winding, tension issues, core fixing faults." }]}
              ]
            }
          }
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
      info: "技术参数 · 11个主要部件 · 流浆箱摆动操作 · 50页",
      data: {
        sections: [
          { icon: "📊", title: "技术参数 Technical Data", subtitle: "宽度、流量、速度、重量等规格", route: "tech-data" },
          { icon: "🔧", title: "设备描述 Description", subtitle: "11个主要部件 · 技术描述 · 工作条件", route: "components" },
          { icon: "🛠", title: "维护 Maintenance", subtitle: "检查 · 清洁 · 润滑 · 流浆箱摆动 · 更换插件 · 唇口设定", route: "maintenance" }
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
              { label: "保留率 Retention", value: "约 50–80%" },
              { label: "浆料温度 Pulp Temperature", value: "60 °C" },
              { label: "流浆箱总重 Headbox Weight", value: "约 14,530 kg" },
              { label: "堰板体重量 Apron Body Weight", value: "约 4,510 kg" }
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
            imageCaption: "Fig. 2: Main components of the headbox / 流浆箱主要部件",
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
            en: "Fiber suspension enters through inlet (A), is evenly distributed by diffuser block (D), accelerated in nozzle chamber (E), and jetted onto the forming roll (G) through the slice lip."
          },
          componentDetails: {
            "stock-feed": { title: "原悬液进料/涂布器 Stock Feed/Spreader (1)", description: { cn: "将浆料均匀分配到流浆箱宽度方向。", en: "Distributes stock evenly across the headbox width." }, image: "images-headbox/page13-img02.jpeg", imageCaption: "Fig. 3: Distributor with supporting structure" },
            "pivoting-device": { title: "摆动装置 Pivoting Device (2)", description: { cn: "用于将流浆箱摆动到不同工作位置（操作、换毯、清洁、换辊）。", en: "Used to swing the headbox into different working positions." }, image: "images-headbox/page14-img02.jpeg", imageCaption: "Fig. 4: Pivoting device" },
            "locking-device": { title: "锁定装置 Locking Device (3)", description: { cn: "在维护工作中锁定流浆箱位置，确保安全。", en: "Locks the headbox position during maintenance for safety." }, image: "images-headbox/page16-img02.jpeg", imageCaption: "Fig. 5: Locking device" },
            "micro-adjusters": { title: "微调装置 Micro-adjusters (4)", description: { cn: "用于精确调节唇口开度，相邻主轴间最大差0.25 mm，全宽最大差0.5 mm。", en: "For precise lip opening adjustment. Max difference: 0.25 mm spindle-to-spindle, 0.5 mm across entire width." }, image: "images-headbox/page16-img03.jpeg", imageCaption: "Fig. 6: Micro-adjusters" },
            "diffuser-block": { title: "阶梯扩散器 Step Diffuser Block (5)", description: { cn: "通过阶梯结构使纤维悬浮液均匀分布，防止絮聚。", en: "Uniformly distributes fiber suspension through step structure, preventing flocculation." }, image: "images-headbox/page17-img02.jpeg", imageCaption: "Fig. 7-8: Step diffuser block" },
            "indicating-device": { title: "指示装置 Indicating Device (6)", description: { cn: "显示唇口开度的刻度装置。", en: "Scale device showing the slice lip opening." }, image: "images-headbox/page19-img02.jpeg", imageCaption: "Fig. 9: Gap scale" },
            "gap-measuring": { title: "间隙测量 Gap Measuring (7)", description: { cn: "测量浆片唇口与成形辊之间的间隙。", en: "Measures the gap between slice lip and forming roll." }, image: "images-headbox/page20-img02.jpeg", imageCaption: "Fig. 10: Gap measuring" },
            "adjusting-device": { title: "调节装置 Adjusting Device (8)", description: { cn: "用于调节流浆箱的整体位置和角度。", en: "Used to adjust the overall position and angle of the headbox." }, image: "images-headbox/page20-img03.jpeg", imageCaption: "Fig. 11: Adjusting device" },
            "nozzle-chamber": { title: "喷嘴腔 Nozzle Chamber (9)", description: { cn: "浆料在此加速并通过唇口喷出，是纸张成形的关键区域。", en: "Stock accelerates here and jets through the slice lip - key area for sheet formation." }, image: "images-headbox/page21-img02.jpeg", imageCaption: "Fig. 12: Nozzle chamber" },
            "slice-lips": { title: "浆片和裙缘 Slice & Apron Lips (11, 12)", description: { cn: "浆片唇口决定纸张成形质量。裙缘引导浆流方向。出厂已设定，建议由ANDRITZ服务人员调整。", en: "Slice lip determines sheet formation quality. Apron lip guides stock flow. Factory preset; ANDRITZ service recommended for adjustments." }},
            "suction-pipe": { title: "抽吸装置 Suction Pipe (15)", description: { cn: "用于清理喷淋器的抽吸装置。", en: "Suction device for cleaning the showers." }, image: "images-headbox/page23-img02.jpeg", imageCaption: "Fig. 13: Suction pipe" }
          }
        },
        maintenance: {
          topics: {
            "checks-schedule": { icon: "✅", title: "检查与维护计划 Checks & Schedule", subtitle: "日常检查 · 周/月/年维护 · 纸张质量", sections: [
              { title: "日常检查 Routine Checks", table: { headers: ["组件", "检查内容"], rows: [["流浆箱整体", "泄漏、损坏、异常噪音"], ["唇口", "磨损、堵塞"], ["喷淋管", "喷嘴堵塞"], ["仪表", "压力、温度、流量读数"]] }},
              { title: "维护计划", table: { headers: ["周期", "检查内容"], rows: [["每周", "泄漏、唇口间隙、磨损"], ["每月", "齿轮箱油位/温度/噪音、伺服驱动、压力传感器"], ["每年", "流浆箱内部泄漏/磨损/清洁、管束、膨胀节"]] }}
            ]},
            cleaning: { icon: "🧹", title: "清洁 Cleaning (4.7)", subtitle: "清洁方法 · 化学清洁剂 · 管束清理", alerts: [
              { type: "warning", title: "小心", content: "冷却后才能清洁。出口侧最大清洁压力40 bar。切勿使用尖锐物体。" }
            ], sections: [
              { title: "清洁流程", steps: [{ label: "步骤 1", cn: "停止进浆，用水冲洗约15分钟。", en: "Stop stock feed, flush with water ~15 min." }, { label: "步骤 2", cn: "可选化学清洁：HCl 2-5%、NaOH 2-5%、硫酸 0.45%，最高60°C。", en: "Optional chemical: HCl 2-5%, NaOH 2-5%, sulfamic acid 0.45%, max 60°C." }, { label: "步骤 3", cn: "用清水彻底冲洗。", en: "Rinse thoroughly with fresh water." }] }
            ]},
            lubrication: { icon: "🛢️", title: "润滑 Lubrication (4.8)", subtitle: "润滑计划表", image: "images-headbox/page40-img02.jpeg", imageCaption: "Fig. 16: Lubrication points", table: { headers: ["润滑点", "润滑剂", "用量", "间隔"], rows: [["支点轴承", "Mobilith SHC PM460", "2 g", "600 h"], ["行星齿轮", "ISO-VG 680", "—", "检查/更换"], ["轴承-间隙调节", "Mobilith SHC PM460", "1 g", "600 h"]] }},
            "swinging-headbox": { icon: "🔄", title: "摆动流浆箱 Swinging Headbox (4.9)", subtitle: "4个工作位置切换操作", alerts: [{ type: "danger", title: "⚠️ 夹持危险", content: "流浆箱摆动时有挤压和夹持危险。必须使用锁定装置。控制面板钥匙从OPERATION切换到SERVICE。" }], sections: [
              { title: "准备工作", paragraphs: [{ cn: "将控制面板钥匙开关转到SERVICE位置。确保所有人员离开危险区域。", en: "Turn control panel key switch to SERVICE. Ensure all personnel clear danger zone." }]},
              { title: "4.9.2 释放网顶张力", steps: [{ label: "步骤", cn: "通过控制面板释放顶部网的张力。", en: "Relieve top wire tension via control panel." }]},
              { title: "4.9.3 提升胸辊", steps: [{ label: "步骤 1", cn: "用起重机在吊耳处固定胸辊。", en: "Secure breast roll with crane at lifting lugs." }, { label: "步骤 2", cn: "拆卸操作侧和传动侧螺栓。", en: "Detach OS and DS bolts." }, { label: "步骤 3", cn: "电动提升。用固定销固定。", en: "Raise electrically. Secure with retention pins." }], image: "images-headbox/page42-img03.jpeg", imageCaption: "Fig. 17: Raising the breast roll" },
              { title: "4.9.4 摆动到换毯位置", steps: [{ label: "步骤 1", cn: "释放锁定装置。", en: "Release locking device." }, { label: "步骤 2", cn: "将流浆箱摆动到换毯位置。", en: "Swing headbox into felt changing position." }, { label: "步骤 3", cn: "插入安全锁定装置。", en: "Insert safety locking device." }], image: "images-headbox/page43-img04.jpeg", imageCaption: "Fig. 18: Felt changing position" },
              { title: "4.9.5 摆动到清洁位置", steps: [{ label: "步骤", cn: "摆动流浆箱到清洁位置，插入锁定装置。", en: "Swing headbox to cleaning position, insert locking device." }], image: "images-headbox/page45-img03.jpeg", imageCaption: "Fig. 19: Cleaning and roll changing position" },
              { title: "4.9.6 摆动到换辊位置", steps: [{ label: "步骤", cn: "摆动流浆箱到成形辊更换位置。", en: "Swing headbox to forming roll changing position." }]},
              { title: "4.9.7 摆动到工作位置", steps: [{ label: "步骤", cn: "解除锁定装置，将流浆箱摆动回工作位置，锁定。", en: "Release locking, swing headbox back to operating position, lock." }]}
            ]},
            "change-inserts": { icon: "🔧", title: "更换插件 Changing Inserts (4.10)", subtitle: "插件的拆卸和安装", alerts: [{ type: "warning", title: "小心", content: "检查裙缘唇口是否损坏。用塑料棒敲出插件。用粒度240的带式砂光机磨平。" }], steps: [{ label: "步骤 1", cn: "检查裙缘唇口是否有损坏。", en: "Check apron lip for damage." }, { label: "步骤 2", cn: "用塑料棒敲出旧插件。", en: "Knock out old inserts with plastic rod." }, { label: "步骤 3", cn: "安装新插件。", en: "Install new inserts." }, { label: "步骤 4", cn: "用粒度240的带式砂光机磨平。", en: "Grind flush with belt sander (grain 240)." }], image: "images-headbox/page48-img03.jpeg", imageCaption: "Fig. 20-21: Removing/Installing inserts" },
            "set-slice-lip": { icon: "📏", title: "设定浆片唇口 Setting Slice Lip (4.11)", subtitle: "微调操作", alerts: [{ type: "info", title: "注意", content: "出厂已预设。相邻主轴间最大差0.25 mm，全宽最大差0.5 mm。建议由ANDRITZ服务人员调整。" }], steps: [{ label: "步骤", cn: "通过微调装置调节唇口开度。使用刻度指示检查设定值。", en: "Adjust lip opening via micro-adjusters. Check setting with scale indication." }], image: "images-headbox/page49-img02.jpeg", imageCaption: "Fig. 22: Setting spindle" }
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
          { icon: "🛠", title: "维护 Maintenance", subtitle: "清洁润滑 · 换刮刀 · 摆动操作 · 换网换毯 · 换辊换轴承", route: "maintenance" }
        ],
        technicalData: {
          sections: [
            { title: "📊 网部数据 Wire Data", type: "data-table", rows: [{ label: "网最大张力 Max. Wire Tension", value: "10 N/mm" }, { label: "网宽 Wire Width", value: "3541 mm" }, { label: "网长 Wire Length (min/max)", value: "14,547 / 15,070 mm" }]},
            { title: "📊 毛毯数据 Felt Data", type: "data-table", rows: [{ label: "毛毯最大张力 Max. Felt Tension", value: "6 N/mm" }, { label: "毛毯宽 Felt Width", value: "3800 mm" }, { label: "毛毯长 Felt Length (min/max)", value: "34,350 / 36,750 mm" }]},
            { title: "📊 辊子规格 Rolls", type: "data-table", rows: [
              { label: "成形辊 Forming Roll (2.1)", value: "Ø1500mm · 4115mm · 驱动 · 橡胶包胶 · 7500kg" },
              { label: "网辊 Wire Roll (2.2)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "网张紧辊 Wire Tension Roll (2.3)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "网校正辊 Regulating Roll (2.4)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "胸辊 Breast Roll (2.5)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "导毯辊 Felt Guide Rolls (2.6/2.7)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "毯张紧辊 Felt Tension Roll (2.8)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" },
              { label: "毯驱动辊 Felt Drive Roll (2.9)", value: "Ø520mm · 4115mm · 驱动 · 橡胶包胶 · 1800kg" },
              { label: "毯校正辊 Regulating Roll (2.10)", value: "Ø520mm · 4115mm · 无驱动 · 橡胶包胶 · 1800kg" }
            ]}
          ],
          note: "新月型成型器 · 悬臂设计 · C&S Paper · 2026"
        },
        components: {
          application: {
            title: "应用领域 Field of Application",
            cn: "新月型成型器PrimeForm用于纸幅的成形、脱水，并将纸幅传送到压榨部。采用悬臂设计，便于更换网和毛毯。",
            en: "The Crescent Former PrimeForm is used for sheet formation, dewatering, and web transfer to the press section. Cantilever design for easy wire and felt changing."
          },
          overview: {
            title: "主要部件 Main Components",
            items: [
              { num: 1, name: "流浆箱 Headbox", route: "component-detail?id=hb-unit" },
              { num: 2, name: "胸辊及摆动装置 Breast roll & swing device", route: "component-detail?id=breast-roll" },
              { num: 3, name: "机架 Frame (悬臂设计)", route: "component-detail?id=frame" },
              { num: 4, name: "吸水箱 Uhle box", route: "component-detail?id=uhle-box" },
              { num: 5, name: "网校正系统 Wire guiding", route: "component-detail?id=wire-guiding" },
              { num: 6, name: "网和毛毯辊 Wire & felt rolls", route: "component-detail?id=rolls" },
              { num: 7, name: "喷淋管 Showers", route: "component-detail?id=showers" },
              { num: 8, name: "毛毯校正装置 Felt guiding", route: "component-detail?id=felt-guiding" },
              { num: 9, name: "毛毯张紧装置 Felt tensioning", route: "component-detail?id=felt-tension" },
              { num: 10, name: "网张紧系统 Wire tensioning", route: "component-detail?id=wire-tension" },
              { num: 11, name: "成形辊 Forming roll", route: "component-detail?id=forming-roll" },
              { num: 12, name: "白水通道 White water channel", route: "component-detail?id=white-water" }
            ]
          },
          techDescription: { title: "技术描述", cn: "浆料从流浆箱喷射到成形辊和网之间的间隙。在成形辊上初步脱水后，纸幅附着在毛毯上继续脱水。网和毛毯各有独立的校正和张紧系统。", en: "Stock jets from headbox into gap between forming roll and wire. After initial dewatering on forming roll, web adheres to felt for further dewatering. Independent guiding and tensioning systems for wire and felt." },
          componentDetails: {
            "hb-unit": { title: "流浆箱 Headbox (1)", description: { cn: "详见流浆箱专项文档。", en: "See Headbox documentation." }},
            "breast-roll": { title: "胸辊及摆动装置 Breast Roll & Swing Device (2)", description: { cn: "胸辊可升起以便更换网和毛毯。摆动装置用于将流浆箱和胸辊移到不同位置。", en: "Breast roll can be raised for wire and felt changes. Swing device moves headbox and breast roll to different positions." }},
            "frame": { title: "机架 Frame (3)", description: { cn: "悬臂设计，操作侧可打开以便更换网和毛毯。", en: "Cantilever design, operator side opens for wire and felt changes." }, image: "images-former/page15-img01.jpeg", imageCaption: "Fig. 5-6: Cantilever device" },
            "uhle-box": { title: "吸水箱 Uhle Box (4)", description: { cn: "用于从毛毯中真空脱水。", en: "Used for vacuum dewatering from the felt." }},
            "wire-guiding": { title: "网校正系统 Wire Guiding (5)", description: { cn: "气动式网校正系统，确保网运行在正确位置。", en: "Pneumatic wire guiding system ensuring correct wire position." }},
            "felt-guiding": { title: "毛毯校正装置 Felt Guiding (8)", description: { cn: "气动式毛毯校正系统。", en: "Pneumatic felt guiding system." }},
            "felt-tension": { title: "毛毯张紧装置 Felt Tensioning (9)", description: { cn: "气动张紧，最大张力6 N/mm。", en: "Pneumatic tensioning, max 6 N/mm." }},
            "wire-tension": { title: "网张紧系统 Wire Tensioning (10)", description: { cn: "气动张紧，最大张力10 N/mm。", en: "Pneumatic tensioning, max 10 N/mm." }},
            "forming-roll": { title: "成形辊 Forming Roll (11)", description: { cn: "Ø1500mm，橡胶包胶，驱动，7500kg。浆料在此辊上初步成形和脱水。", en: "Ø1500mm, rubber covered, driven, 7500kg. Initial sheet formation and dewatering on this roll." }},
            "rolls": { title: "网和毛毯辊 Wire & Felt Rolls (6)", description: { cn: "10根辊子，含驱动辊、张紧辊、校正辊、导辊。详见技术参数。", en: "10 rolls including drive, tension, regulating, and guide rolls. See technical data." }},
            "showers": { title: "喷淋管 Showers (7)", description: { cn: "用于清洁网和毛毯的高压和低压喷淋系统。", en: "High and low pressure shower systems for wire and felt cleaning." }},
            "white-water": { title: "白水通道 White Water Channel (12)", description: { cn: "收集和排出脱出的白水。", en: "Collects and drains extracted white water." }}
          }
        },
        maintenance: {
          topics: {
            "checks-schedule": { icon: "✅", title: "检查与维护计划", subtitle: "日常检查 · 周/月/半年维护", sections: [
              { title: "每周", table: { headers: ["项目", "内容"], rows: [["网/毛毯", "裂纹、孔洞、起皱"], ["辊", "损坏检查"], ["刮刀片", "磨损检查"], ["喷淋嘴", "堵塞检查"]] }},
              { title: "每月", table: { headers: ["项目", "内容"], rows: [["轴承", "温度、振动、噪音"], ["张紧装置", "功能检查"], ["弹簧波纹管", "检查"], ["吸水箱", "检查"], ["紧急停机", "功能测试"]] }},
              { title: "每半年", table: { headers: ["项目", "内容"], rows: [["蜗轮升降机", "检查"], ["齿轮箱", "油位/温度/泄漏/噪音"], ["伺服驱动", "检查"], ["引纸水针", "检查"], ["螺栓/螺钉", "检查拧紧"]] }}
            ]},
            cleaning: { icon: "🧹", title: "清洁 Cleaning (4.7)", subtitle: "清洁方法 · 冲洗流程", alerts: [{ type: "warning", title: "小心", content: "切勿用尖锐物体或高压设备清洁涂装表面。清洁剂：HCl 2-5%、NaOH 2-5%、硫酸 0.45%，最高60°C。" }], steps: [{ label: "步骤 1", cn: "停止进浆，用水环路冲洗约15分钟。", en: "Stop stock feed, flush with water loop ~15 min." }, { label: "步骤 2", cn: "彻底清洁毛毯和辊。", en: "Thoroughly clean felt and rolls." }, { label: "步骤 3", cn: "清洁刮刀片和堵塞的喷淋嘴。", en: "Clean doctor blades and clogged shower nozzles." }, { label: "步骤 4", cn: "长时间停机时释放毛毯和网张力。", en: "Relieve felt and wire tension for longer shutdowns." }]},
            lubrication: { icon: "🛢️", title: "润滑 Lubrication (4.8)", subtitle: "三个润滑计划表", sections: [
              { title: "回转装置润滑", table: { headers: ["润滑点", "润滑剂", "间隔"], rows: [["回转装置轴承", "Mobilith SHC PM460", "每月"], ["铰链接头", "Mobilith SHC PM460", "600 h"], ["蜗轮箱", "ISO-VG 680", "2000 h"]] }},
              { title: "辊和刮刀润滑", table: { headers: ["润滑点", "润滑剂", "补充间隔"], rows: [["辊轴承", "Mobilith SHC PM460", "150 h"], ["刮刀轴承", "Mobilith SHC PM460", "150 h"]] }},
              { title: "喷淋管润滑", table: { headers: ["润滑点", "润滑剂", "间隔"], rows: [["喷淋管摆动器", "锂皂基润滑脂", "150-300 h"]] }}
            ]},
            "blade-change": { icon: "🔪", title: "更换刮刀刀片 Blade Change (4.9)", subtitle: "刮刀刀片更换步骤", steps: [{ label: "步骤 1", cn: "将刮刀从辊上抬起。", en: "Raise doctor from roll." }, { label: "步骤 2", cn: "佩戴防割手套。", en: "Wear cut-resistant gloves." }, { label: "步骤 3", cn: "拉出旧刀片。", en: "Pull out old blade." }, { label: "步骤 4", cn: "插入新刀片。", en: "Insert new blade." }, { label: "步骤 5", cn: "将刮刀设置到工作位置。", en: "Set doctor to operating position." }]},
            "swinging": { icon: "🔄", title: "摆动操作 Swinging (4.10)", subtitle: "流浆箱、胸辊和张紧辊的摆动", alerts: [{ type: "danger", title: "⚠️ 夹持危险", content: "必须使用安全支撑装置。控制面板钥匙从OPERATION切换到SERVICE。" }], sections: [
              { title: "准备工作", steps: [{ label: "步骤 1", cn: "松开毛毯张力。", en: "Relieve felt tension." }, { label: "步骤 2", cn: "控制面板钥匙转到SERVICE。", en: "Turn control panel key to SERVICE." }]},
              { title: "4.10.3 提升胸辊", steps: [{ label: "步骤", cn: "用起重机在吊耳处固定胸辊 → 拆卸螺栓 → 电动提升 → 固定销固定。", en: "Secure breast roll with crane at lugs → detach bolts → raise electrically → secure with pins." }]},
              { title: "4.10.4 换毯位置", steps: [{ label: "步骤", cn: "释放锁定 → 摆动到换毯位置 → 插入安全锁定。", en: "Release lock → swing to felt changing position → insert safety lock." }]},
              { title: "4.10.5 清洁位置", steps: [{ label: "步骤", cn: "摆动到清洁位置 → 锁定。", en: "Swing to cleaning position → lock." }]},
              { title: "4.10.6 换辊位置", steps: [{ label: "步骤", cn: "摆动到成形辊更换位置 → 锁定。", en: "Swing to forming roll change position → lock." }]},
              { title: "4.10.7 工作位置", steps: [{ label: "步骤", cn: "解除锁定 → 摆回工作位置 → 锁定。", en: "Release lock → swing back to operating position → lock." }]}
            ]}
          },
          procedures: {
            "change-wire": { icon: "🕸️", title: "更换网 Wire Change (4.11.1)", subtitle: "网更换完整流程", alerts: [{ type: "danger", title: "⚠️ 安全", content: "重物吊装作业。穿戴个人防护装备。不要在悬吊载荷下行走。" }], sections: [
              { title: "拆除旧网", steps: [{ label: "步骤 1", cn: "释放网张力。", en: "Relieve wire tension." }, { label: "步骤 2", cn: "将胸辊和流浆箱向上运行。", en: "Run breast roll and headbox upward." }, { label: "步骤 3", cn: "打开悬臂机架（操作侧）。", en: "Open cantilever frame (operator side)." }, { label: "步骤 4", cn: "拆除旧网。", en: "Remove old wire." }]},
              { title: "安装新网", steps: [{ label: "步骤 1", cn: "穿入新网。", en: "Thread new wire." }, { label: "步骤 2", cn: "关闭悬臂机架。", en: "Close cantilever frame." }, { label: "步骤 3", cn: "降下胸辊和流浆箱。", en: "Lower breast roll and headbox." }, { label: "步骤 4", cn: "张紧网至运行张力。", en: "Tension wire to operating tension." }]}
            ]},
            "change-felt": { icon: "🧶", title: "更换毛毯 Felt Change (4.11.2)", subtitle: "毛毯更换流程", alerts: [{ type: "danger", title: "⚠️ 安全", content: "重物吊装。穿戴防护装备。注意夹持点。" }], sections: [
              { title: "更换流程", steps: [{ label: "步骤 1", cn: "释放毛毯张力。", en: "Relieve felt tension." }, { label: "步骤 2", cn: "打开悬臂机架。", en: "Open cantilever frame." }, { label: "步骤 3", cn: "拆除旧毛毯。", en: "Remove old felt." }, { label: "步骤 4", cn: "穿入新毛毯。", en: "Thread new felt." }, { label: "步骤 5", cn: "关闭机架，张紧毛毯。", en: "Close frame, tension felt." }]}
            ]},
            "change-rolls": { icon: "⚙️", title: "更换辊子 Roll Change (4.12)", subtitle: "10种辊子的更换步骤", alerts: [{ type: "danger", title: "⚠️ 警告", content: "成形辊重7500kg！使用合适的起重设备。所有步骤必须在机器停机并锁定后进行。" }], children: [
              { icon: "", title: "成形辊 2.1 (7500kg)", route: "maintenance-detail?id=roll-forming" },
              { icon: "", title: "网辊 2.2 / 张紧辊 2.3 / 校正辊 2.4", route: "maintenance-detail?id=roll-wire" },
              { icon: "", title: "胸辊 2.5", route: "maintenance-detail?id=roll-breast" },
              { icon: "", title: "导毯辊 2.6/2.7 / 张紧辊 2.8 / 驱动辊 2.9 / 校正辊 2.10", route: "maintenance-detail?id=roll-felt" }
            ]},
            "roll-forming": { title: "更换成形辊 Forming Roll 2.1", steps: [{ label: "步骤 1", cn: "安装滑动管到悬臂上。", en: "Mount slip-on tubes on cantilever." }, { label: "步骤 2", cn: "安装移出轨道。", en: "Mount run-out rails." }, { label: "步骤 3", cn: "用起重机/吊具固定成形辊。", en: "Secure forming roll with crane/rigging." }, { label: "步骤 4", cn: "拆卸轴承座螺栓。", en: "Detach bearing housing bolts." }, { label: "步骤 5", cn: "将成形辊沿轨道移出。", en: "Run forming roll out on rails." }, { label: "安装", cn: "按相反顺序执行。轴承需用液压螺母安装。", en: "Reverse order. Bearings mounted with hydraulic nut." }]},
            "roll-wire": { title: "更换网辊/张紧辊/校正辊", steps: [{ label: "步骤", cn: "安装移出轨道。用起重机固定辊子。拆卸轴承座。沿轨道移出。按相反顺序安装。", en: "Mount run-out rails. Secure roll with crane. Detach bearing housing. Run out on rails. Install in reverse order." }]},
            "roll-breast": { title: "更换胸辊 Breast Roll 2.5", steps: [{ label: "步骤", cn: "与上述辊更换流程相似。需先释放网张力并打开悬臂。", en: "Similar to above roll change. Relieve wire tension and open cantilever first." }]},
            "roll-felt": { title: "更换毛毯相关辊", steps: [{ label: "步骤", cn: "释放毛毯张力。安装移出轨道。固定辊子。拆卸轴承座。沿轨道移出。反向安装。", en: "Relieve felt tension. Mount run-out rails. Secure roll. Detach bearing housing. Run out. Reverse to install." }]},
            "change-bearings": { icon: "🔩", title: "更换轴承 Bearing Change (4.13)", subtitle: "三种轴承更换方法", sections: [
              { title: "网/毛毯导辊轴承 (22319 CCK/W33 C3)", steps: [{ label: "步骤", cn: "拆卸轴承座。用液压手动泵推出轴承。用液压螺母安装新轴承（启动压力3.02 MPa，位移0.59 mm）。", en: "Detach housing. Push off bearing with hydraulic hand pump. Mount with hydraulic nut (Pstart 3.02 MPa, Ss 0.59 mm)." }]},
              { title: "毛毯驱动辊轴承", steps: [{ label: "步骤", cn: "类似操作但轴承型号不同。注意驱动侧和操作侧的固定/浮动轴承配置。", en: "Similar but different bearing type. Note fixed/floating bearing arrangement DS/OS." }]},
              { title: "成形辊轴承 (22330 CCK/W33 C3)", steps: [{ label: "步骤", cn: "需要更大启动力。启动压力5.28 MPa，位移0.9 mm。用液压螺母安装。", en: "Requires higher force. Pstart 5.28 MPa, Ss 0.9 mm. Mount with hydraulic nut." }]}
            ]}
          }
        }
      }
    },

    // ============================================================
    // PRESS SECTION (Existing)
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
  // =============================================================,
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
  // =============================================================,
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
  }
    }
  }
};

// 将数据挂载到 window 对象，供搜索和其他模块访问
window.APP_DATA = APP_DATA;
window.APP_DATA_LOADED = true;
