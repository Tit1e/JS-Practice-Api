const adClass = [
  {
    value: "01",
    label: "药品类",
    children: [
      {
        fcode: "0101",
        fpcode: "01",
        fadclass: "处方药",
        value: "0101",
        label: "处方药"
      },
      {
        fcode: "0102",
        fpcode: "01",
        fadclass: "非处方药",
        value: "0102",
        label: "非处方药"
      }
    ]
  },
  {
    value: "02",
    label: "医疗器械类",
    children: [
      {
        fcode: "0201",
        fpcode: "02",
        fadclass: "医疗器械",
        value: "0201",
        label: "医疗器械"
      }
    ]
  },
  {
    value: "03",
    label: "化妆品类",
    children: [
      {
        fcode: "0301",
        fpcode: "03",
        fadclass: "普通化妆品",
        value: "0301",
        label: "普通化妆品"
      },
      {
        fcode: "0302",
        fpcode: "03",
        fadclass: "特殊化妆品",
        value: "0302",
        label: "特殊化妆品"
      }
    ]
  },
  {
    value: "04",
    label: "房地产类",
    children: [
      {
        fcode: "0401",
        fpcode: "04",
        fadclass: "商品房",
        value: "0401",
        label: "商品房"
      },
      {
        fcode: "0402",
        fpcode: "04",
        fadclass: "商用地产／非民用",
        value: "0402",
        label: "商用地产／非民用"
      },
      {
        fcode: "0403",
        fpcode: "04",
        fadclass: "其他",
        value: "0403",
        label: "其他"
      }
    ]
  },
  {
    value: "05",
    label: "普通食品类",
    children: [
      {
        fcode: "0501",
        fpcode: "05",
        fadclass: "乳制品",
        value: "0501",
        label: "乳制品"
      },
      {
        fcode: "0502",
        fpcode: "05",
        fadclass: "饮料",
        value: "0502",
        label: "饮料"
      },
      {
        fcode: "0503",
        fpcode: "05",
        fadclass: "奶粉",
        value: "0503",
        label: "奶粉"
      },
      {
        fcode: "0504",
        fpcode: "05",
        fadclass: "冲饮食品",
        value: "0504",
        label: "冲饮食品"
      },
      {
        fcode: "0505",
        fpcode: "05",
        fadclass: "方便食品",
        value: "0505",
        label: "方便食品"
      },
      {
        fcode: "0506",
        fpcode: "05",
        fadclass: "焙烤食品",
        value: "0506",
        label: "焙烤食品"
      },
      {
        fcode: "0507",
        fpcode: "05",
        fadclass: "食用油脂",
        value: "0507",
        label: "食用油脂"
      },
      {
        fcode: "0508",
        fpcode: "05",
        fadclass: "米面杂粮",
        value: "0508",
        label: "米面杂粮"
      },
      {
        fcode: "0509",
        fpcode: "05",
        fadclass: "调味品",
        value: "0509",
        label: "调味品"
      },
      {
        fcode: "0510",
        fpcode: "05",
        fadclass: "其他",
        value: "0510",
        label: "其他"
      }
    ]
  },
  {
    value: "06",
    label: "保健食品类",
    children: [
      {
        fcode: "0601",
        fpcode: "06",
        fadclass: "保健食品",
        value: "0601",
        label: "保健食品"
      }
    ]
  },
  {
    value: "07",
    label: "烟草类",
    children: [
      {
        fcode: "0701",
        fpcode: "07",
        fadclass: "烟草制品",
        value: "0701",
        label: "烟草制品"
      },
      {
        fcode: "0702",
        fpcode: "07",
        fadclass: "其他",
        value: "0702",
        label: "其他"
      }
    ]
  },
  {
    value: "08",
    label: "酒类",
    children: [
      {
        fcode: "0801",
        fpcode: "08",
        fadclass: "酒",
        value: "0801",
        label: "酒"
      }
    ]
  },
  {
    value: "09",
    label: "电器类",
    children: [
      {
        fcode: "0901",
        fpcode: "09",
        fadclass: "视听设备",
        value: "0901",
        label: "视听设备"
      },
      {
        fcode: "0902",
        fpcode: "09",
        fadclass: "空气调节设备",
        value: "0902",
        label: "空气调节设备"
      },
      {
        fcode: "0903",
        fpcode: "09",
        fadclass: "通信设备",
        value: "0903",
        label: "通信设备"
      },
      {
        fcode: "0904",
        fpcode: "09",
        fadclass: "厨卫电器",
        value: "0904",
        label: "厨卫电器"
      },
      {
        fcode: "0905",
        fpcode: "09",
        fadclass: "照摄像产品",
        value: "0905",
        label: "照摄像产品"
      },
      {
        fcode: "0906",
        fpcode: "09",
        fadclass: "小家电产品",
        value: "0906",
        label: "小家电产品"
      },
      {
        fcode: "0907",
        fpcode: "09",
        fadclass: "其他电器",
        value: "0907",
        label: "其他电器"
      }
    ]
  },
  {
    value: "10",
    label: "交通产品类",
    children: [
      {
        fcode: "1001",
        fpcode: "10",
        fadclass: "机动车",
        value: "1001",
        label: "机动车"
      },
      {
        fcode: "1002",
        fpcode: "10",
        fadclass: "非机动车",
        value: "1002",
        label: "非机动车"
      },
      {
        fcode: "1003",
        fpcode: "10",
        fadclass: "汽车用品",
        value: "1003",
        label: "汽车用品"
      },
      {
        fcode: "1004",
        fpcode: "10",
        fadclass: "其他交通产品",
        value: "1004",
        label: "其他交通产品"
      }
    ]
  },
  {
    value: "11",
    label: "知识产品类",
    children: [
      {
        fcode: "1101",
        fpcode: "11",
        fadclass: "软件",
        value: "1101",
        label: "软件"
      },
      {
        fcode: "1102",
        fpcode: "11",
        fadclass: "音像印刷出版物",
        value: "1102",
        label: "音像印刷出版物"
      },
      {
        fcode: "1103",
        fpcode: "11",
        fadclass: "其他知识产品",
        value: "1103",
        label: "其他知识产品"
      }
    ]
  },
  {
    value: "12",
    label: "普通商品类",
    children: [
      {
        fcode: "1201",
        fpcode: "12",
        fadclass: "保健用品",
        value: "1201",
        label: "保健用品"
      },
      {
        fcode: "1202",
        fpcode: "12",
        fadclass: "消毒产品",
        value: "1202",
        label: "消毒产品"
      },
      {
        fcode: "1203",
        fpcode: "12",
        fadclass: "洁齿用品",
        value: "1203",
        label: "洁齿用品"
      },
      {
        fcode: "1204",
        fpcode: "12",
        fadclass: "卫生用品",
        value: "1204",
        label: "卫生用品"
      },
      {
        fcode: "1205",
        fpcode: "12",
        fadclass: "清洁用品",
        value: "1205",
        label: "清洁用品"
      },
      {
        fcode: "1206",
        fpcode: "12",
        fadclass: "计算机及配套设备",
        value: "1206",
        label: "计算机及配套设备"
      },
      {
        fcode: "1207",
        fpcode: "12",
        fadclass: "服饰箱包",
        value: "1207",
        label: "服饰箱包"
      },
      {
        fcode: "1208",
        fpcode: "12",
        fadclass: "家具家私",
        value: "1208",
        label: "家具家私"
      },
      {
        fcode: "1209",
        fpcode: "12",
        fadclass: "纺织品",
        value: "1209",
        label: "纺织品"
      },
      {
        fcode: "1210",
        fpcode: "12",
        fadclass: "办公学习用品",
        value: "1210",
        label: "办公学习用品"
      },
      {
        fcode: "1211",
        fpcode: "12",
        fadclass: "首饰",
        value: "1211",
        label: "首饰"
      },
      {
        fcode: "1212",
        fpcode: "12",
        fadclass: "钟表眼镜",
        value: "1212",
        label: "钟表眼镜"
      },
      {
        fcode: "1213",
        fpcode: "12",
        fadclass: "收藏品",
        value: "1213",
        label: "收藏品"
      },
      {
        fcode: "1214",
        fpcode: "12",
        fadclass: "厨房用具",
        value: "1214",
        label: "厨房用具"
      },
      {
        fcode: "1215",
        fpcode: "12",
        fadclass: "建材五金",
        value: "1215",
        label: "建材五金"
      },
      {
        fcode: "1216",
        fpcode: "12",
        fadclass: "文体娱乐产品",
        value: "1216",
        label: "文体娱乐产品"
      },
      {
        fcode: "1217",
        fpcode: "12",
        fadclass: "农兽药",
        value: "1217",
        label: "农兽药"
      },
      {
        fcode: "1218",
        fpcode: "12",
        fadclass: "农林渔牧物资",
        value: "1218",
        label: "农林渔牧物资"
      },
      {
        fcode: "1219",
        fpcode: "12",
        fadclass: "工业设备",
        value: "1219",
        label: "工业设备"
      },
      {
        fcode: "1220",
        fpcode: "12",
        fadclass: "宠物产品",
        value: "1220",
        label: "宠物产品"
      },
      {
        fcode: "1221",
        fpcode: "12",
        fadclass: "其他普通商品",
        value: "1221",
        label: "其他普通商品"
      }
    ]
  },
  {
    value: "13",
    label: "医疗服务类",
    children: [
      {
        fcode: "1301",
        fpcode: "13",
        fadclass: "医疗诊疗服务",
        value: "1301",
        label: "医疗诊疗服务"
      },
      {
        fcode: "1302",
        fpcode: "13",
        fadclass: "医疗美容服务",
        value: "1302",
        label: "医疗美容服务"
      }
    ]
  },
  {
    value: "14",
    label: "金融服务类",
    children: [
      {
        fcode: "1401",
        fpcode: "14",
        fadclass: "证券",
        value: "1401",
        label: "证券"
      },
      {
        fcode: "1402",
        fpcode: "14",
        fadclass: "彩票",
        value: "1402",
        label: "彩票"
      },
      {
        fcode: "1403",
        fpcode: "14",
        fadclass: "保险",
        value: "1403",
        label: "保险"
      },
      {
        fcode: "1404",
        fpcode: "14",
        fadclass: "典当",
        value: "1404",
        label: "典当"
      },
      {
        fcode: "1405",
        fpcode: "14",
        fadclass: "银行",
        value: "1405",
        label: "银行"
      },
      {
        fcode: "1406",
        fpcode: "14",
        fadclass: "拍卖",
        value: "1406",
        label: "拍卖"
      },
      {
        fcode: "1407",
        fpcode: "14",
        fadclass: "债券",
        value: "1407",
        label: "债券"
      },
      {
        fcode: "1408",
        fpcode: "14",
        fadclass: "基金",
        value: "1408",
        label: "基金"
      },
      {
        fcode: "1409",
        fpcode: "14",
        fadclass: "其他金融服务",
        value: "1409",
        label: "其他金融服务"
      },
      {
        fcode: "1411",
        fpcode: "14",
        fadclass: "期货",
        value: "1411",
        label: "期货"
      },
      {
        fcode: "1412",
        fpcode: "14",
        fadclass: "外汇",
        value: "1412",
        label: "外汇"
      },
      {
        fcode: "1413",
        fpcode: "14",
        fadclass: "互联网小贷",
        value: "1413",
        label: "互联网小贷"
      },
      {
        fcode: "1414",
        fpcode: "14",
        fadclass: "私募基金",
        value: "1414",
        label: "私募基金"
      },
      {
        fcode: "1415",
        fpcode: "14",
        fadclass: "网络借贷信息中介",
        value: "1415",
        label: "网络借贷信息中介"
      },
      {
        fcode: "1416",
        fpcode: "14",
        fadclass: "众筹",
        value: "1416",
        label: "众筹"
      },
      {
        fcode: "1417",
        fpcode: "14",
        fadclass: "地方交易场所",
        value: "1417",
        label: "地方交易场所"
      },
      {
        fcode: "1418",
        fpcode: "14",
        fadclass: "第三方支付",
        value: "1418",
        label: "第三方支付"
      },
      {
        fcode: "1419",
        fpcode: "14",
        fadclass: "融资担保",
        value: "1419",
        label: "融资担保"
      },
      {
        fcode: "1420",
        fpcode: "14",
        fadclass: "融资租赁",
        value: "1420",
        label: "融资租赁"
      },
      {
        fcode: "1421",
        fpcode: "14",
        fadclass: "商业保理",
        value: "1421",
        label: "商业保理"
      },
      {
        fcode: "1422",
        fpcode: "14",
        fadclass: "投资理财公司",
        value: "1422",
        label: "投资理财公司"
      },
      {
        fcode: "1423",
        fpcode: "14",
        fadclass: "农民专业合作社",
        value: "1423",
        label: "农民专业合作社"
      },
      {
        fcode: "1410",
        fpcode: "14",
        fadclass: "互联网金融",
        value: "1410",
        label: "互联网金融"
      }
    ]
  },
  {
    value: "15",
    label: "信息服务类",
    children: [
      {
        fcode: "1501",
        fpcode: "15",
        fadclass: "普通电话服务",
        value: "1501",
        label: "普通电话服务"
      },
      {
        fcode: "1502",
        fpcode: "15",
        fadclass: "移动通信服务",
        value: "1502",
        label: "移动通信服务"
      },
      {
        fcode: "1503",
        fpcode: "15",
        fadclass: "声讯服务",
        value: "1503",
        label: "声讯服务"
      },
      {
        fcode: "1504",
        fpcode: "15",
        fadclass: "其他信息服务",
        value: "1504",
        label: "其他信息服务"
      }
    ]
  },
  {
    value: "16",
    label: "互联网服务类",
    children: [
      {
        fcode: "1601",
        fpcode: "16",
        fadclass: "电子商务",
        value: "1601",
        label: "电子商务"
      },
      {
        fcode: "1602",
        fpcode: "16",
        fadclass: "其它互联网服务",
        value: "1602",
        label: "其它互联网服务"
      }
    ]
  },
  {
    value: "17",
    label: "商业招商投资",
    children: [
      {
        fcode: "1701",
        fpcode: "17",
        fadclass: "加工揽承",
        value: "1701",
        label: "加工揽承"
      },
      {
        fcode: "1702",
        fpcode: "17",
        fadclass: "招商",
        value: "1702",
        label: "招商"
      },
      {
        fcode: "1703",
        fpcode: "17",
        fadclass: "特许加盟",
        value: "1703",
        label: "特许加盟"
      },
      {
        fcode: "1704",
        fpcode: "17",
        fadclass: "其他商业招商投资",
        value: "1704",
        label: "其他商业招商投资"
      }
    ]
  },
  {
    value: "18",
    label: "教育培训服务类",
    children: [
      {
        fcode: "1801",
        fpcode: "18",
        fadclass: "教育",
        value: "1801",
        label: "教育"
      },
      {
        fcode: "1802",
        fpcode: "18",
        fadclass: "培训",
        value: "1802",
        label: "培训"
      },
      {
        fcode: "1803",
        fpcode: "18",
        fadclass: "其他教育培训服务",
        value: "1803",
        label: "其他教育培训服务"
      }
    ]
  },
  {
    value: "19",
    label: "会展文化活动服务类",
    children: [
      {
        fcode: "1901",
        fpcode: "19",
        fadclass: "会展",
        value: "1901",
        label: "会展"
      },
      {
        fcode: "1902",
        fpcode: "19",
        fadclass: "文体活动",
        value: "1902",
        label: "文体活动"
      },
      {
        fcode: "1903",
        fpcode: "19",
        fadclass: "其他会展文体活动服务",
        value: "1903",
        label: "其他会展文体活动服务"
      }
    ]
  },
  {
    value: "20",
    label: "普通服务类",
    children: [
      {
        fcode: "2001",
        fpcode: "20",
        fadclass: "销售服务",
        value: "2001",
        label: "销售服务"
      },
      {
        fcode: "2002",
        fpcode: "20",
        fadclass: "职业中介",
        value: "2002",
        label: "职业中介"
      },
      {
        fcode: "2003",
        fpcode: "20",
        fadclass: "旅游服务",
        value: "2003",
        label: "旅游服务"
      },
      {
        fcode: "2004",
        fpcode: "20",
        fadclass: "票务服务",
        value: "2004",
        label: "票务服务"
      },
      {
        fcode: "2005",
        fpcode: "20",
        fadclass: "餐饮服务",
        value: "2005",
        label: "餐饮服务"
      },
      {
        fcode: "2006",
        fpcode: "20",
        fadclass: "宾馆服务",
        value: "2006",
        label: "宾馆服务"
      },
      {
        fcode: "2007",
        fpcode: "20",
        fadclass: "运输服务",
        value: "2007",
        label: "运输服务"
      },
      {
        fcode: "2008",
        fpcode: "20",
        fadclass: "休闲娱乐服务",
        value: "2008",
        label: "休闲娱乐服务"
      },
      {
        fcode: "2009",
        fpcode: "20",
        fadclass: "美容美发美体（除医疗美容）",
        value: "2009",
        label: "美容美发美体（除医疗美容）"
      },
      {
        fcode: "2010",
        fpcode: "20",
        fadclass: "装饰装潢服务",
        value: "2010",
        label: "装饰装潢服务"
      },
      {
        fcode: "2011",
        fpcode: "20",
        fadclass: "婚介婚庆服务",
        value: "2011",
        label: "婚介婚庆服务"
      },
      {
        fcode: "2012",
        fpcode: "20",
        fadclass: "出入境中介服务",
        value: "2012",
        label: "出入境中介服务"
      },
      {
        fcode: "2013",
        fpcode: "20",
        fadclass: "企业登记代理",
        value: "2013",
        label: "企业登记代理"
      },
      {
        fcode: "2014",
        fpcode: "20",
        fadclass: "法律服务",
        value: "2014",
        label: "法律服务"
      },
      {
        fcode: "2015",
        fpcode: "20",
        fadclass: "邮政快递服务",
        value: "2015",
        label: "邮政快递服务"
      },
      {
        fcode: "2016",
        fpcode: "20",
        fadclass: "摄影服务",
        value: "2016",
        label: "摄影服务"
      },
      {
        fcode: "2017",
        fpcode: "20",
        fadclass: "咨询服务",
        value: "2017",
        label: "咨询服务"
      },
      {
        fcode: "2018",
        fpcode: "20",
        fadclass: "修理和维护服务",
        value: "2018",
        label: "修理和维护服务"
      },
      {
        fcode: "2019",
        fpcode: "20",
        fadclass: "房产中介服务",
        value: "2019",
        label: "房产中介服务"
      },
      {
        fcode: "2020",
        fpcode: "20",
        fadclass: "其他普通服务",
        value: "2020",
        label: "其他普通服务"
      }
    ]
  },
  {
    value: "21",
    label: "形象宣传类",
    children: [
      {
        fcode: "2101",
        fpcode: "21",
        fadclass: "形象宣传",
        value: "2101",
        label: "形象宣传"
      }
    ]
  },
  {
    value: "22",
    label: "非商业类",
    children: [
      {
        fcode: "2201",
        fpcode: "22",
        fadclass: "公告启示",
        value: "2201",
        label: "公告启示"
      },
      {
        fcode: "2202",
        fpcode: "22",
        fadclass: "公益广告",
        value: "2202",
        label: "公益广告"
      },
      {
        fcode: "2203",
        fpcode: "22",
        fadclass: "企业招聘",
        value: "2203",
        label: "企业招聘"
      },
      {
        fcode: "2204",
        fpcode: "22",
        fadclass: "其他非商业",
        value: "2204",
        label: "其他非商业"
      }
    ]
  },
  {
    value: "23",
    label: "其它类",
    children: [
      {
        fcode: "2302",
        fpcode: "23",
        fadclass: "节目预告",
        value: "2302",
        label: "节目预告"
      },
      {
        fcode: "2399",
        fpcode: "23",
        fadclass: "非广告",
        value: "2399",
        label: "非广告"
      }
    ]
  }
];

module.exports = adClass