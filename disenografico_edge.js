/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'template',
                            type: 'image',
                            rect: ['0', '0px', '1920px', '980px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"template.png",'0px','0px']
                        },
                        {
                            id: 'templateCopy',
                            type: 'image',
                            rect: ['0', '0px', '1920px', '980px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"template.png",'0px','0px']
                        },
                        {
                            id: 'edificios',
                            type: 'image',
                            rect: ['0', '-157px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"edificios.svg",'0px','525px']
                        },
                        {
                            id: 'edificios2',
                            type: 'image',
                            rect: ['0', '-157px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"edificios2.svg",'0px','373px']
                        },
                        {
                            id: 'edificios3',
                            type: 'image',
                            rect: ['0px', '-155px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"edificios3.svg",'0px','314px']
                        },
                        {
                            id: 'texto',
                            type: 'image',
                            rect: ['1368px', '-85px', '465px', '783px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"texto.svg",'0px','0px']
                        },
                        {
                            id: 'nubescielo',
                            symbolName: 'nubescielo',
                            type: 'rect',
                            rect: ['39', '146px', '6442', '347', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['972px', '273px', '108', '149', 'auto', 'auto'],
                            opacity: '0.4'
                        },
                        {
                            id: 'b1e3',
                            display: 'block',
                            type: 'image',
                            rect: ['285px', '160px', '163px', '224px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b1e3.svg",'0px','0px'],
                            transform: [[],[],[],['0.34','0.34']]
                        },
                        {
                            id: 'b1eco2',
                            display: 'block',
                            type: 'image',
                            rect: ['687px', '323px', '163px', '224px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"b1eco.svg",'0px','0px'],
                            transform: [[],[],[],['1.2','1.2']]
                        },
                        {
                            id: 'b1gaia',
                            display: 'block',
                            type: 'image',
                            rect: ['1062px', '45px', '163px', '224px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"b1gaia.svg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'b1e32',
                            display: 'none',
                            type: 'image',
                            rect: ['893px', '247px', '163px', '224px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"b1e3.svg",'0px','0px','100%','100%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['13.97','13.97']]
                        },
                        {
                            id: 'b1e36',
                            display: 'none',
                            type: 'image',
                            rect: ['501px', '267px', '900px', '1240px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"b1e3.svg",'0px','0px'],
                            transform: [[],[],[],['2.5','2.5']]
                        },
                        {
                            id: 'b1eco',
                            type: 'image',
                            rect: ['516px', '348px', '900px', '1240px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1eco.svg",'0px','0px']
                        },
                        {
                            id: 'b1gaia3',
                            type: 'image',
                            rect: ['510px', '301px', '900px', '1240px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"b1gaia.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '920px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 240000,
                    autoPlay: true,
                    data: [
                        [
                            "eid90",
                            "opacity",
                            2748,
                            0,
                            "linear",
                            "${edificios}",
                            '1',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            4615,
                            0,
                            "linear",
                            "${edificios}",
                            '1',
                            '1'
                        ],
                        [
                            "eid3",
                            "background-position",
                            1000,
                            1748,
                            "linear",
                            "${edificios}",
                            [0,525],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid358",
                            "left",
                            12600,
                            975,
                            "linear",
                            "${b1gaia3}",
                            '693px',
                            '510px'
                        ],
                        [
                            "eid122",
                            "left",
                            5000,
                            2500,
                            "linear",
                            "${b1e3}",
                            '404px',
                            '221px'
                        ],
                        [
                            "eid128",
                            "left",
                            7500,
                            2500,
                            "linear",
                            "${b1e3}",
                            '221px',
                            '285px'
                        ],
                        [
                            "eid355",
                            "scaleY",
                            12600,
                            975,
                            "linear",
                            "${b1gaia3}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid359",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${b1gaia3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid357",
                            "opacity",
                            13575,
                            175,
                            "linear",
                            "${b1gaia3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid446",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "opacity",
                            5000,
                            5000,
                            "linear",
                            "${b1eco2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid458",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${edificios3}",
                            '-155px',
                            '-155px'
                        ],
                        [
                            "eid254",
                            "top",
                            5000,
                            2500,
                            "linear",
                            "${b1gaia}",
                            '715px',
                            '439px'
                        ],
                        [
                            "eid255",
                            "top",
                            7500,
                            2500,
                            "linear",
                            "${b1gaia}",
                            '439px',
                            '45px'
                        ],
                        [
                            "eid225",
                            "scaleX",
                            5000,
                            5000,
                            "linear",
                            "${b1eco2}",
                            '0.34',
                            '1.2'
                        ],
                        [
                            "eid334",
                            "scaleX",
                            10250,
                            975,
                            "linear",
                            "${b1e36}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid203",
                            "filter.invert",
                            18642,
                            0,
                            "linear",
                            "${b1e32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-position",
                            500,
                            750,
                            "linear",
                            "${edificios2}",
                            [0,373],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "scaleY",
                            4615,
                            0,
                            "linear",
                            "${edificios3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid441",
                            "opacity",
                            5000,
                            1951,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid356",
                            "scaleX",
                            12600,
                            975,
                            "linear",
                            "${b1gaia3}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid341",
                            "left",
                            10250,
                            975,
                            "linear",
                            "${b1e36}",
                            '-84px',
                            '501px'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1eco2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${b1eco2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            11509,
                            0,
                            "linear",
                            "${b1eco2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${b1eco2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "top",
                            11509,
                            848,
                            "linear",
                            "${b1eco}",
                            '-137px',
                            '348px'
                        ],
                        [
                            "eid227",
                            "left",
                            5000,
                            2500,
                            "linear",
                            "${b1eco2}",
                            '899px',
                            '897px'
                        ],
                        [
                            "eid228",
                            "left",
                            7500,
                            2500,
                            "linear",
                            "${b1eco2}",
                            '897px',
                            '687px'
                        ],
                        [
                            "eid222",
                            "top",
                            5000,
                            2500,
                            "linear",
                            "${b1eco2}",
                            '770px',
                            '568px'
                        ],
                        [
                            "eid223",
                            "top",
                            7500,
                            2500,
                            "linear",
                            "${b1eco2}",
                            '568px',
                            '323px'
                        ],
                        [
                            "eid133",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${b1e3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            11509,
                            0,
                            "linear",
                            "${b1e3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "top",
                            5000,
                            2500,
                            "linear",
                            "${b1e3}",
                            '587px',
                            '403px'
                        ],
                        [
                            "eid129",
                            "top",
                            7500,
                            2500,
                            "linear",
                            "${b1e3}",
                            '403px',
                            '160px'
                        ],
                        [
                            "eid86",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${edificios2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            4615,
                            0,
                            "linear",
                            "${edificios2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid445",
                            "top",
                            6951,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '273px',
                            '273px'
                        ],
                        [
                            "eid147",
                            "scaleX",
                            18642,
                            1000,
                            "linear",
                            "${b1e32}",
                            '1',
                            '13.97'
                        ],
                        [
                            "eid363",
                            "opacity",
                            12377,
                            0,
                            "linear",
                            "${templateCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid146",
                            "width",
                            18642,
                            0,
                            "linear",
                            "${b1e32}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid117",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${texto}",
                            '1368px',
                            '1368px'
                        ],
                        [
                            "eid60",
                            "opacity",
                            750,
                            1750,
                            "linear",
                            "${texto}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            5000,
                            5000,
                            "linear",
                            "${b1e3}",
                            '0.34',
                            '1'
                        ],
                        [
                            "eid364",
                            "scaleY",
                            500,
                            9500,
                            "linear",
                            "${templateCopy}",
                            '1',
                            '1.54'
                        ],
                        [
                            "eid258",
                            "opacity",
                            5000,
                            5000,
                            "linear",
                            "${b1gaia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid257",
                            "scaleX",
                            5000,
                            5000,
                            "linear",
                            "${b1gaia}",
                            '0.34',
                            '0.8'
                        ],
                        [
                            "eid350",
                            "scaleX",
                            11509,
                            848,
                            "linear",
                            "${b1eco}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid252",
                            "opacity",
                            19587,
                            55,
                            "linear",
                            "${b1e32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid351",
                            "opacity",
                            12357,
                            152,
                            "linear",
                            "${b1eco}",
                            '1',
                            '0'
                        ],
                        [
                            "eid335",
                            "scaleY",
                            10250,
                            975,
                            "linear",
                            "${b1e36}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid290",
                            "opacity",
                            1000,
                            1500,
                            "linear",
                            "${nubescielo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            12600,
                            0,
                            "linear",
                            "${b1gaia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            4615,
                            0,
                            "linear",
                            "${edificios3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid457",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${edificios2}",
                            '-157px',
                            '-157px'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            500,
                            9500,
                            "linear",
                            "${template}",
                            '1',
                            '1.54'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            18642,
                            462,
                            "linear",
                            "${b1e32}",
                            '1',
                            '0.28571'
                        ],
                        [
                            "eid151",
                            "scaleY",
                            19104,
                            538,
                            "linear",
                            "${b1e32}",
                            '0.28571',
                            '13.97'
                        ],
                        [
                            "eid284",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nubescielo}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid145",
                            "height",
                            18642,
                            0,
                            "linear",
                            "${b1e32}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid460",
                            "top",
                            2748,
                            0,
                            "linear",
                            "${edificios}",
                            '-157px',
                            '-157px'
                        ],
                        [
                            "eid127",
                            "opacity",
                            5000,
                            5000,
                            "linear",
                            "${b1e3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "background-position",
                            1000,
                            1000,
                            "linear",
                            "${edificios3}",
                            [0,314],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid149",
                            "left",
                            18642,
                            462,
                            "linear",
                            "${b1e32}",
                            '285px',
                            '1141px'
                        ],
                        [
                            "eid152",
                            "left",
                            19104,
                            483,
                            "linear",
                            "${b1e32}",
                            '1141px',
                            '916px'
                        ],
                        [
                            "eid195",
                            "left",
                            19587,
                            55,
                            "linear",
                            "${b1e32}",
                            '916px',
                            '893px'
                        ],
                        [
                            "eid96",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${edificios3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid362",
                            "scaleX",
                            500,
                            9500,
                            "linear",
                            "${templateCopy}",
                            '1',
                            '1.54'
                        ],
                        [
                            "eid193",
                            "skewX",
                            18642,
                            462,
                            "linear",
                            "${b1e32}",
                            '0deg',
                            '-67deg'
                        ],
                        [
                            "eid194",
                            "skewX",
                            19104,
                            538,
                            "linear",
                            "${b1e32}",
                            '-67deg',
                            '0deg'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            5000,
                            5000,
                            "linear",
                            "${b1eco2}",
                            '0.34',
                            '1.2'
                        ],
                        [
                            "eid344",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1e36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid342",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${b1e36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${b1e36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid354",
                            "top",
                            12600,
                            975,
                            "linear",
                            "${b1gaia3}",
                            '-354px',
                            '301px'
                        ],
                        [
                            "eid349",
                            "scaleY",
                            11509,
                            848,
                            "linear",
                            "${b1eco}",
                            '0.18',
                            '2.5'
                        ],
                        [
                            "eid256",
                            "scaleY",
                            5000,
                            5000,
                            "linear",
                            "${b1gaia}",
                            '0.34',
                            '0.8'
                        ],
                        [
                            "eid444",
                            "left",
                            6951,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '972px',
                            '972px'
                        ],
                        [
                            "eid338",
                            "top",
                            10250,
                            975,
                            "linear",
                            "${b1e36}",
                            '-261px',
                            '267px'
                        ],
                        [
                            "eid352",
                            "left",
                            11509,
                            848,
                            "linear",
                            "${b1eco}",
                            '319px',
                            '516px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${edificios3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            4615,
                            0,
                            "linear",
                            "${edificios3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            12377,
                            0,
                            "linear",
                            "${template}",
                            '1',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            500,
                            9500,
                            "linear",
                            "${template}",
                            '1',
                            '1.54'
                        ],
                        [
                            "eid347",
                            "opacity",
                            11225,
                            175,
                            "linear",
                            "${b1e36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid259",
                            "left",
                            5000,
                            2500,
                            "linear",
                            "${b1gaia}",
                            '1362px',
                            '1069px'
                        ],
                        [
                            "eid260",
                            "left",
                            7500,
                            2500,
                            "linear",
                            "${b1gaia}",
                            '1069px',
                            '1062px'
                        ],
                        [
                            "eid150",
                            "top",
                            18642,
                            462,
                            "linear",
                            "${b1e32}",
                            '247px',
                            '364px'
                        ],
                        [
                            "eid153",
                            "top",
                            19104,
                            538,
                            "linear",
                            "${b1e32}",
                            '364px',
                            '770px'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            5000,
                            5000,
                            "linear",
                            "${b1e3}",
                            '0.34',
                            '1'
                        ],
                        [
                            "eid353",
                            "display",
                            11509,
                            0,
                            "linear",
                            "${b1eco}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1e32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            8392,
                            0,
                            "linear",
                            "${b1e32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            18392,
                            0,
                            "linear",
                            "${b1e32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            18642,
                            0,
                            "linear",
                            "${b1e32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid462",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${texto}",
                            '-85px',
                            '-85px'
                        ]
                    ]
                }
            },
            "b1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.95', '0.95']],
                            type: 'image',
                            rect: ['-103px', '-103px', '267px', '267px', 'auto', 'auto'],
                            id: 'circuloe3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/circuloe3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '61px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "top",
                            2250,
                            1250,
                            "linear",
                            "${circuloe3}",
                            '-103px',
                            '-463px'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            2250,
                            1250,
                            "linear",
                            "${circuloe3}",
                            '0.23',
                            '0.95'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2250,
                            1250,
                            "linear",
                            "${circuloe3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            2250,
                            1250,
                            "linear",
                            "${circuloe3}",
                            '0.23',
                            '0.95'
                        ]
                    ]
                }
            },
            "nubescielo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-4934px', '0px', '6442px', '347px', 'auto', 'auto'],
                            id: 'nubes',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6442px', '347px']
                        }
                    }
                },
                timeline: {
                    duration: 240000,
                    autoPlay: true,
                    data: [
                        [
                            "eid283",
                            "left",
                            0,
                            240000,
                            "linear",
                            "${nubes}",
                            '0px',
                            '-4934px'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.12', '0.12']],
                            id: 'b4',
                            type: 'image',
                            rect: ['-396px', '-546px', '900px', '1240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/b4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 75000,
                    autoPlay: true,
                    data: [
                        [
                            "eid427",
                            "top",
                            0,
                            18750,
                            "linear",
                            "${b4}",
                            '-546px',
                            '-695px'
                        ],
                        [
                            "eid428",
                            "top",
                            18750,
                            18750,
                            "linear",
                            "${b4}",
                            '-695px',
                            '-458px'
                        ],
                        [
                            "eid429",
                            "top",
                            37500,
                            18750,
                            "linear",
                            "${b4}",
                            '-458px',
                            '-288px'
                        ],
                        [
                            "eid430",
                            "top",
                            56250,
                            18750,
                            "linear",
                            "${b4}",
                            '-288px',
                            '-546px'
                        ],
                        [
                            "eid423",
                            "left",
                            0,
                            18750,
                            "linear",
                            "${b4}",
                            '-396px',
                            '-637px'
                        ],
                        [
                            "eid424",
                            "left",
                            18750,
                            18750,
                            "linear",
                            "${b4}",
                            '-637px',
                            '-937px'
                        ],
                        [
                            "eid425",
                            "left",
                            37500,
                            18750,
                            "linear",
                            "${b4}",
                            '-937px',
                            '-450px'
                        ],
                        [
                            "eid426",
                            "left",
                            56250,
                            18750,
                            "linear",
                            "${b4}",
                            '-450px',
                            '-396px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("disenografico_edgeActions.js");
})("EDGE-6816775");
