"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 3810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
/* harmony import */ var _lib_cubes_ThreeByThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6057);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rubikscube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6067);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__]);
three__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Canvas = (props)=>{
    const { 0: cube  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.cube ? props.cube : new _lib_cubes_ThreeByThree__WEBPACK_IMPORTED_MODULE_3__/* .ThreeByThree */ .l());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {
                enableZoom: false,
                mouseButtons: {
                    LEFT: three__WEBPACK_IMPORTED_MODULE_2__.MOUSE.ROTATE,
                    MIDDLE: three__WEBPACK_IMPORTED_MODULE_2__.MOUSE.DOLLY,
                    RIGHT: three__WEBPACK_IMPORTED_MODULE_2__.MOUSE.ROTATE
                },
                enablePan: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                intensity: 0.2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
                position: [
                    5,
                    -5,
                    -5
                ],
                intensity: 0.8
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
                position: [
                    -5,
                    5,
                    5
                ],
                intensity: 0.8
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rubikscube__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                cube: cube
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera, {
                makeDefault: true,
                position: [
                    5,
                    5,
                    5
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rubikscube)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/lib/cubes/types.ts
var types = __webpack_require__(3450);
// EXTERNAL MODULE: external "@react-three/drei"
var drei_ = __webpack_require__(4165);
;// CONCATENATED MODULE: ./src/components/threejs/box.tsx




const Box = ({ state , position , ...props }, ref)=>{
    const { 0: color0 , 1: color1 , 2: color2 , 3: color3 , 4: color4 , 5: color5 ,  } = state;
    const { 0: pieceSize  } = (0,external_react_.useState)(0.95);
    const handleClick = (event)=>{
        event.stopPropagation();
        console.log("Name of the mesh (initial place) : ", event.eventObject.name);
        console.log("Position :", event.eventObject.position);
        console.log("Rotation :", event.eventObject.rotation);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(drei_.RoundedBox, {
            args: [
                1,
                1,
                1
            ],
            position: position,
            radius: 0.05,
            smoothness: 4,
            ref: ref,
            onClick: handleClick,
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                    color: types/* HexColor.Black */.ZR.Black
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        pieceSize,
                        pieceSize,
                        0.5
                    ],
                    position: [
                        0,
                        0,
                        0.26
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color0 ?? types/* HexColor.Black */.ZR.Black
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        0.5,
                        pieceSize,
                        pieceSize
                    ],
                    position: [
                        0.26,
                        0,
                        0
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color1 ?? types/* HexColor.Black */.ZR.Black
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        pieceSize,
                        0.5,
                        pieceSize
                    ],
                    position: [
                        0,
                        0.26,
                        0
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color2 ?? types/* HexColor.Black */.ZR.Black
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        pieceSize,
                        pieceSize,
                        0.5
                    ],
                    position: [
                        0,
                        0,
                        -0.26
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color3 ?? types/* HexColor.Black */.ZR.Black
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        0.5,
                        pieceSize,
                        pieceSize
                    ],
                    position: [
                        -0.26,
                        0,
                        0
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color4 ?? types/* HexColor.Black */.ZR.Black
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(drei_.RoundedBox, {
                    args: [
                        pieceSize,
                        0.5,
                        pieceSize
                    ],
                    position: [
                        0,
                        -0.26,
                        0
                    ],
                    radius: 0.05,
                    smoothness: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meshPhongMaterial", {
                        color: color5 ?? types/* HexColor.Black */.ZR.Black
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const box = (/*#__PURE__*/(0,external_react_.forwardRef)(Box));

;// CONCATENATED MODULE: ./src/components/threejs/rubikscube.tsx



const RubiksCube = ({ cube  })=>{
    const { 0: state  } = (0,external_react_.useState)(cube.getHexRubik());
    const refs = (0,external_react_.useRef)(new Array(26).fill(null));
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!mounted) {
            for(let i = 0; i < 27; i++){
                refs.current[i].name = Number(i).toString();
            }
        }
        setMounted(true);
    }, [
        mounted
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("group", {
        scale: 1,
        children: cube.getCubePositions().map((position, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(box, {
                state: state[i],
                position: position,
                init: i,
                name: Number(i).toString(),
                ref: (element)=>{
                    refs.current[i] = element;
                }
            }, position.join("-"));
        })
    });
};
/* harmony default export */ const rubikscube = (RubiksCube);


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ ThreeByThree)
});

// EXTERNAL MODULE: ./src/lib/cubes/types.ts
var types = __webpack_require__(3450);
;// CONCATENATED MODULE: ./src/lib/cubes/constants.ts

const stateMapping = {
    0: {
        0: [
            2,
            8
        ],
        1: [
            3,
            6
        ],
        2: null,
        3: null,
        4: null,
        5: [
            5,
            2
        ]
    },
    1: {
        0: [
            2,
            7
        ],
        1: null,
        2: null,
        3: null,
        4: null,
        5: [
            5,
            1
        ]
    },
    2: {
        0: [
            2,
            6
        ],
        1: null,
        2: null,
        3: null,
        4: [
            1,
            8
        ],
        5: [
            5,
            0
        ]
    },
    3: {
        0: [
            2,
            5
        ],
        1: [
            3,
            3
        ],
        2: null,
        3: null,
        4: null,
        5: null
    },
    4: {
        0: [
            2,
            4
        ],
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
    },
    5: {
        0: [
            2,
            3
        ],
        1: null,
        2: null,
        3: null,
        4: [
            1,
            5
        ],
        5: null
    },
    6: {
        0: [
            2,
            2
        ],
        1: [
            3,
            0
        ],
        2: [
            0,
            8
        ],
        3: null,
        4: null,
        5: null
    },
    7: {
        0: [
            2,
            1
        ],
        1: null,
        2: [
            0,
            7
        ],
        3: null,
        4: null,
        5: null
    },
    8: {
        0: [
            2,
            0
        ],
        1: null,
        2: [
            0,
            6
        ],
        3: null,
        4: [
            1,
            2
        ],
        5: null
    },
    9: {
        0: null,
        1: [
            3,
            7
        ],
        2: null,
        3: null,
        4: null,
        5: [
            5,
            5
        ]
    },
    10: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: [
            5,
            4
        ]
    },
    11: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: [
            1,
            7
        ],
        5: [
            5,
            3
        ]
    },
    12: {
        0: null,
        1: [
            3,
            4
        ],
        2: null,
        3: null,
        4: null,
        5: null
    },
    13: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
    },
    14: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: [
            1,
            4
        ],
        5: null
    },
    15: {
        0: null,
        1: [
            3,
            1
        ],
        2: [
            0,
            5
        ],
        3: null,
        4: null,
        5: null
    },
    16: {
        0: null,
        1: null,
        2: [
            0,
            4
        ],
        3: null,
        4: null,
        5: null
    },
    17: {
        0: null,
        1: null,
        2: [
            0,
            3
        ],
        3: null,
        4: [
            1,
            1
        ],
        5: null
    },
    18: {
        0: null,
        1: [
            3,
            8
        ],
        2: null,
        3: [
            4,
            6
        ],
        4: null,
        5: [
            5,
            8
        ]
    },
    19: {
        0: null,
        1: null,
        2: null,
        3: [
            4,
            7
        ],
        4: null,
        5: [
            5,
            7
        ]
    },
    20: {
        0: null,
        1: null,
        2: null,
        3: [
            4,
            8
        ],
        4: [
            1,
            6
        ],
        5: [
            5,
            6
        ]
    },
    21: {
        0: null,
        1: [
            3,
            5
        ],
        2: null,
        3: [
            4,
            3
        ],
        4: null,
        5: null
    },
    22: {
        0: null,
        1: null,
        2: null,
        3: [
            4,
            4
        ],
        4: null,
        5: null
    },
    23: {
        0: null,
        1: null,
        2: null,
        3: [
            4,
            5
        ],
        4: [
            1,
            3
        ],
        5: null
    },
    24: {
        0: null,
        1: [
            3,
            2
        ],
        2: [
            0,
            2
        ],
        3: [
            4,
            0
        ],
        4: null,
        5: null
    },
    25: {
        0: null,
        1: null,
        2: [
            0,
            1
        ],
        3: [
            4,
            1
        ],
        4: null,
        5: null
    },
    26: {
        0: null,
        1: null,
        2: [
            0,
            0
        ],
        3: [
            4,
            2
        ],
        4: [
            1,
            0
        ],
        5: null
    }
};
const { White , Orange , Yellow , Blue , Green , Red  } = types/* Color */.Il;
const solvedCubeArray = [
    Array(9).fill(White),
    Array(9).fill(Orange),
    Array(9).fill(Green),
    Array(9).fill(Red),
    Array(9).fill(Blue),
    Array(9).fill(Yellow), 
];
const solvedHexRubik = {
    0: {
        0: types/* HexColor.Green */.ZR.Green,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: null,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    1: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: null,
        3: null,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    2: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: null,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    3: {
        0: types/* HexColor.Green */.ZR.Green,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: null,
        4: null,
        5: null
    },
    4: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
    },
    5: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: null,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    },
    6: {
        0: types/* HexColor.Green */.ZR.Green,
        1: types/* HexColor.Red */.ZR.Red,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: null,
        5: null
    },
    7: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: null,
        5: null
    },
    8: {
        0: types/* HexColor.Green */.ZR.Green,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    },
    9: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: null,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    10: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    11: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    12: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: null,
        4: null,
        5: null
    },
    13: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
    },
    14: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    },
    15: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: null,
        5: null
    },
    16: {
        0: null,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: null,
        5: null
    },
    17: {
        0: null,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: null,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    },
    18: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    19: {
        0: null,
        1: null,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    20: {
        0: null,
        1: null,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: types/* HexColor.Yellow */.ZR.Yellow
    },
    21: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: null
    },
    22: {
        0: null,
        1: null,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: null
    },
    23: {
        0: null,
        1: null,
        2: null,
        3: types/* HexColor.White */.ZR.White,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    },
    24: {
        0: null,
        1: types/* HexColor.Red */.ZR.Red,
        2: types/* HexColor.White */.ZR.White,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: null
    },
    25: {
        0: null,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: types/* HexColor.White */.ZR.White,
        4: null,
        5: null
    },
    26: {
        0: null,
        1: null,
        2: types/* HexColor.White */.ZR.White,
        3: types/* HexColor.White */.ZR.White,
        4: types/* HexColor.Orange */.ZR.Orange,
        5: null
    }
};

;// CONCATENATED MODULE: ./src/lib/cubes/Moves.ts
var Moves;
(function(Moves) {
    Moves["R"] = "R";
    Moves["Ri"] = "R'";
    Moves["R2"] = "R2";
    Moves["L"] = "L";
    Moves["Li"] = "L'";
    Moves["L2"] = "L2";
    Moves["F"] = "F";
    Moves["Fi"] = "F'";
    Moves["F2"] = "F2";
    Moves["B"] = "B";
    Moves["Bi"] = "B'";
    Moves["B2"] = "B2";
    Moves["U"] = "U";
    Moves["Ui"] = "U'";
    Moves["U2"] = "U2";
    Moves["D"] = "D";
    Moves["Di"] = "D'";
    Moves["D2"] = "D2";
    Moves["M"] = "M";
    Moves["M2"] = "M2";
    Moves["Mi"] = "M'";
})(Moves || (Moves = {}));
var Rotations// export enum Orientations {
//    z = "z",
//    zi = "z'",
//    z2 = "z2",
// }
;
(function(Rotations) {
    Rotations["x"] = "x";
    Rotations["xi"] = "x'";
    Rotations["x2"] = "x2";
    Rotations["y"] = "y";
    Rotations["yi"] = "y'";
    Rotations["y2"] = "y2";
    Rotations["z"] = "z";
    Rotations["zi"] = "z'";
    Rotations["z2"] = "z2";
})(Rotations || (Rotations = {}));

;// CONCATENATED MODULE: ./src/lib/cubes/Scramble.ts

const { R , Ri , L , Li , F , Fi , B , Bi , U , Ui , D , Di  } = Moves;
class Scramble {
    constructor(pScramble){
        this._scramble = pScramble?.trim().replace(/i/g, "'") ?? this.generateRandomScramble().trim().replace(/i/g, "'");
    }
    get scramble() {
        return this._scramble;
    }
    set scramble(v) {
        this._scramble = v;
    }
    generateRandomScramble() {
        let move = "";
        const min = 15;
        const max = 20;
        const nb = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
        let lastLetter = "";
        const movesArray = Object.keys(Moves);
        for(let i = 0; i < nb; i++){
            let a = Math.floor(Math.random() * movesArray.length);
            while(movesArray[a][0] === lastLetter || movesArray[a] === Moves.M || movesArray[a] === Moves.M2 || movesArray[a] === "Mi" || movesArray[a] === "M'"){
                a = Math.floor(Math.random() * movesArray.length);
            }
            move = move.concat(movesArray[a], " ");
            lastLetter = movesArray[a][0];
        }
        return move.replace(/,/g, " ").replace(/i/g, "'");
    }
    inverseScramble(pScramble) {
        const currentScramble = pScramble.split(" ");
        for(let i = 0; i < currentScramble.length; i++){
            switch(currentScramble[i]){
                case R:
                    currentScramble[i] = Ri;
                    break;
                case Ri:
                    currentScramble[i] = R;
                    break;
                case L:
                    currentScramble[i] = Li;
                    break;
                case Li:
                    currentScramble[i] = L;
                    break;
                case F:
                    currentScramble[i] = Fi;
                    break;
                case Fi:
                    currentScramble[i] = F;
                    break;
                case B:
                    currentScramble[i] = F;
                    break;
                case Bi:
                    currentScramble[i] = B;
                    break;
                case U:
                    currentScramble[i] = Ui;
                    break;
                case Ui:
                    currentScramble[i] = U;
                    break;
                case D:
                    currentScramble[i] = Di;
                    break;
                case Di:
                    currentScramble[i] = D;
                    break;
            }
        }
        const reverseScramble = currentScramble.reverse();
        pScramble = reverseScramble.join(" ");
        return pScramble;
    }
}
/* harmony default export */ const cubes_Scramble = (Scramble);

;// CONCATENATED MODULE: ./src/lib/cubes/Cube.ts



class Cube {
    constructor(){
        this._geneticMoves = [];
    }
    set geneticMoves(v) {
        this._geneticMoves = v;
    }
    get geneticMoves() {
        return this._geneticMoves;
    }
    move(scramble) {
        const currentScramble = scramble.trim().replace(/i/g, "'").split(" ");
        for (const element of currentScramble){
            switch(element){
                case Moves.R:
                    this.moveRight();
                    break;
                case Moves.R2:
                    this.moveRight();
                    this.moveRight();
                    break;
                case Moves.Ri:
                    this.moveRightPrime();
                    break;
                case Moves.L:
                    this.moveLeft();
                    break;
                case Moves.L2:
                    this.moveLeft();
                    this.moveLeft();
                    break;
                case Moves.Li:
                    this.moveLeftPrime();
                    break;
                case Moves.F:
                    this.moveFront();
                    break;
                case Moves.F2:
                    this.moveFront();
                    this.moveFront();
                    break;
                case Moves.Fi:
                    this.moveFrontPrime();
                    break;
                case Moves.B:
                    this.moveBack();
                    break;
                case Moves.B2:
                    this.moveBack();
                    this.moveBack();
                    break;
                case Moves.Bi:
                    this.moveBackPrime();
                    break;
                case Moves.U:
                    this.moveUp();
                    break;
                case Moves.U2:
                    this.moveUp();
                    this.moveUp();
                    break;
                case Moves.Ui:
                    this.moveUpPrime();
                    break;
                case Moves.D:
                    this.moveDown();
                    break;
                case Moves.D2:
                    this.moveDown();
                    this.moveDown();
                    break;
                case Moves.M:
                    this.moveMiddle();
                    this.moveMiddle();
                    this.moveMiddle();
                    break;
                case Moves.M2:
                    this.moveMiddle();
                    this.moveMiddle();
                    break;
                case Moves.Mi:
                    this.moveMiddle();
                    break;
                case Moves.Di:
                    this.moveDownPrime();
                    break;
                case Rotations.x:
                    this.rotateX();
                    break;
                case Rotations.x2:
                    this.rotateX();
                    this.rotateX();
                    break;
                case Rotations.xi:
                    this.rotateXi();
                    break;
                case Rotations.y:
                    this.rotateY();
                    break;
                case Rotations.y2:
                    this.rotateY();
                    this.rotateY();
                    break;
                case Rotations.yi:
                    this.rotateYi();
                    break;
                case Rotations.z:
                    this.rotateZ();
                    break;
                case Rotations.z2:
                    this.rotateZ();
                    this.rotateZ();
                    break;
                case Rotations.zi:
                    this.rotateZi();
                    break;
                default:
                    console.warn("Move not found");
                    console.warn("Scramble : " + currentScramble);
                    console.warn("Move : " + element);
                    break;
            }
        }
    }
    getRandomScramble() {
        const scramble = new cubes_Scramble().scramble;
        return scramble;
    }
    getRandomMove() {
        const moves = Object.values(Moves);
        const randomInt = Math.floor(Math.random() * moves.length);
        return moves[randomInt];
    }
    static mapColor = (color)=>{
        switch(color){
            case types/* Color.White */.Il.White:
                return "White";
            case types/* Color.Orange */.Il.Orange:
                return "Orange";
            case types/* Color.Yellow */.Il.Yellow:
                return "Yellow";
            case types/* Color.Blue */.Il.Blue:
                return "Blue";
            case types/* Color.Green */.Il.Green:
                return "Green";
            case types/* Color.Red */.Il.Red:
                return "Red";
            default:
                return "";
        }
    };
    static getColorArray(cubeArray) {
        return cubeArray.map((face)=>{
            return face.map((color)=>this.mapColor(color));
        });
    }
}
/* harmony default export */ const cubes_Cube = (Cube);

;// CONCATENATED MODULE: ./src/lib/cubes/ThreeByThree.ts




class ThreeByThree extends cubes_Cube {
    constructor(cubeArray){
        super();
        // ? Représentation des 26 pièces du cube
        this._stateMapping = stateMapping;
        // ? Si cubeArray n'est pas fourni, utiliser le cubeArray résolu
        this._cubeArray = cubeArray ?? solvedCubeArray;
        // ? Tjrs égale au cubeArray résolu
        this._solvedCubeArray = solvedCubeArray;
        this._solvedHexRubik = solvedHexRubik;
        this._scramble = "";
    }
    get scramble() {
        return this._scramble;
    }
    set scramble(v) {
        this._scramble = v;
    }
    resetCubeArray() {
        this._cubeArray = [
            Array(9).fill(types/* Color.White */.Il.White),
            Array(9).fill(types/* Color.Orange */.Il.Orange),
            Array(9).fill(types/* Color.Green */.Il.Green),
            Array(9).fill(types/* Color.Red */.Il.Red),
            Array(9).fill(types/* Color.Blue */.Il.Blue),
            Array(9).fill(types/* Color.Yellow */.Il.Yellow), 
        ];
        this.scramble = "";
    }
    randomlyScrambleCube() {
        const scramble = new cubes_Scramble().scramble;
        this.resetCubeArray();
        this.move(scramble);
        this.scramble = scramble;
    }
    getRubik = ()=>{
        const rubik = this.solvedHexRubik;
        for (const [stateMappingKey, cube] of Object.entries(this.stateMapping)){
            if (rubik.hasOwnProperty(stateMappingKey)) {
                for (const [cubeKey, color] of Object.entries(cube)){
                    if (cube.hasOwnProperty(cubeKey)) {
                        if (color) {
                            rubik[stateMappingKey][cubeKey] = this.cubeArray[color[0]][color[1]];
                        }
                    }
                }
            }
        }
        return rubik;
    };
    getColorRubik() {
        const rubik = this.getRubik();
        return Object.values(rubik).map((piece)=>{
            return Object.values(piece).map((color)=>{
                return ThreeByThree.mapColor(color);
            });
        });
    }
    getMinimalColorRubik() {
        const rubik = this.getRubik();
        return Object.values(rubik).map((piece)=>{
            return Object.values(piece).map((color)=>{
                return ThreeByThree.mapColor(color);
            }).filter((color)=>color !== "");
        });
    }
    getHexRubik = ()=>{
        const rubik = this.solvedHexRubik;
        for (const [stateMappingKey, cube] of Object.entries(this.stateMapping)){
            if (rubik.hasOwnProperty(stateMappingKey)) {
                for (const [cubeKey, color] of Object.entries(cube)){
                    if (cube.hasOwnProperty(cubeKey)) {
                        if (color) {
                            rubik[stateMappingKey][cubeKey] = this.getHexCubeArray()[color[0]][color[1]];
                        }
                    }
                }
            }
        }
        return rubik;
    };
    colorToHex(color) {
        switch(color){
            case types/* Color.Blue */.Il.Blue:
                return types/* HexColor.Blue */.ZR.Blue;
            case types/* Color.Red */.Il.Red:
                return types/* HexColor.Red */.ZR.Red;
            case types/* Color.Green */.Il.Green:
                return types/* HexColor.Green */.ZR.Green;
            case types/* Color.Yellow */.Il.Yellow:
                return types/* HexColor.Yellow */.ZR.Yellow;
            case types/* Color.Orange */.Il.Orange:
                return types/* HexColor.Orange */.ZR.Orange;
            case types/* Color.White */.Il.White:
                return types/* HexColor.White */.ZR.White;
            default:
                return types/* HexColor.Black */.ZR.Black;
        }
    }
    getHexCubeArray = ()=>{
        return this.cubeArray.map((face)=>{
            return face.map((color)=>{
                return this.colorToHex(color);
            });
        });
    };
    get solvedHexRubik() {
        return this._solvedHexRubik;
    }
    get solvedCubeArray() {
        return this._solvedCubeArray;
    }
    set solvedCubeArray(v) {
        this._solvedCubeArray = v;
    }
    get stateMapping() {
        return this._stateMapping;
    }
    set stateMapping(v) {
        this._stateMapping = v;
    }
    get cubeArray() {
        return this._cubeArray;
    }
    set cubeArray(value) {
        this._cubeArray = value;
    }
    getCubePositions = ()=>{
        let newCubePositions = [];
        for(let z = 1; z >= -1; z--){
            for(let y = -1; y <= 1; y++){
                for(let x = 1; x >= -1; x--){
                    newCubePositions.push([
                        x,
                        y,
                        z
                    ]);
                }
            }
        }
        return newCubePositions;
    };
    rotationFace(face) {
        return [
            face[6],
            face[3],
            face[0],
            face[7],
            face[4],
            face[1],
            face[8],
            face[5],
            face[2], 
        ];
    }
    rotationFacePrime(face) {
        return [
            face[2],
            face[5],
            face[8],
            face[1],
            face[4],
            face[7],
            face[0],
            face[3],
            face[6], 
        ];
    }
    elementsToMoveRight(currentCube) {
        const whiteFace = currentCube[0].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        const greenFace = currentCube[2].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        const blueFace = currentCube[4].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        const yellowFace = currentCube[5].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        return {
            whiteFace,
            greenFace,
            blueFace,
            yellowFace
        };
    }
    moveRight() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , greenFace , blueFace , yellowFace  } = this.elementsToMoveRight(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i * 3 + 2, 1, greenFace[i]);
            currentCube[2].splice(i * 3 + 2, 1, yellowFace[i]);
            currentCube[4].splice(i * 3, 1, whiteFace[2 - i]);
            currentCube[5].splice(i * 3 + 2, 1, blueFace[2 - i]);
        }
        currentCube[3] = this.rotationFace(currentCube[3]);
        this.cubeArray = currentCube;
    }
    moveRightPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , greenFace , blueFace , yellowFace  } = this.elementsToMoveRight(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i * 3 + 2, 1, blueFace[2 - i]);
            currentCube[2].splice(i * 3 + 2, 1, whiteFace[i]);
            currentCube[4].splice(i * 3, 1, yellowFace[2 - i]);
            currentCube[5].splice(i * 3 + 2, 1, greenFace[i]);
        }
        currentCube[3] = this.rotationFacePrime(currentCube[3]);
        this.cubeArray = currentCube;
    }
    elementsToMoveLeft(currentCube) {
        const whiteFace = currentCube[0].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        const greenFace = currentCube[2].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        const blueFace = currentCube[4].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        const yellowFace = currentCube[5].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        return {
            whiteFace,
            greenFace,
            blueFace,
            yellowFace
        };
    }
    moveLeft() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , greenFace , blueFace , yellowFace  } = this.elementsToMoveLeft(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i * 3, 1, blueFace[2 - i]);
            currentCube[2].splice(i * 3, 1, whiteFace[i]);
            currentCube[4].splice(i * 3 + 2, 1, yellowFace[2 - i]);
            currentCube[5].splice(i * 3, 1, greenFace[i]);
        }
        currentCube[1] = this.rotationFace(currentCube[1]);
        this.cubeArray = currentCube;
    }
    moveLeftPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , greenFace , blueFace , yellowFace  } = this.elementsToMoveLeft(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i * 3, 1, greenFace[i]);
            currentCube[2].splice(i * 3, 1, yellowFace[i]);
            currentCube[4].splice(i * 3 + 2, 1, whiteFace[2 - i]);
            currentCube[5].splice(i * 3, 1, blueFace[2 - i]);
        }
        currentCube[1] = this.rotationFacePrime(currentCube[1]);
        this.cubeArray = currentCube;
    }
    elementsToMoveFront(currentCube) {
        const whiteFace = currentCube[0].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        const orangeFace = currentCube[1].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        const redFace = currentCube[3].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        const yellowFace = currentCube[5].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        return {
            whiteFace,
            orangeFace,
            redFace,
            yellowFace
        };
    }
    moveFront() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , orangeFace , redFace , yellowFace  } = this.elementsToMoveFront(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(6 + i, 1, orangeFace[2 - i]);
            currentCube[1].splice(i * 3 + 2, 1, yellowFace[i]);
            currentCube[3].splice(i * 3, 1, whiteFace[i]);
            currentCube[5].splice(i, 1, redFace[2 - i]);
        }
        currentCube[2] = this.rotationFace(currentCube[2]);
        this.cubeArray = currentCube;
    }
    moveFrontPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , orangeFace , redFace , yellowFace  } = this.elementsToMoveFront(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(6 + i, 1, redFace[i]);
            currentCube[1].splice(i * 3 + 2, 1, whiteFace[2 - i]);
            currentCube[3].splice(i * 3, 1, yellowFace[2 - i]);
            currentCube[5].splice(i, 1, orangeFace[i]);
        }
        currentCube[2] = this.rotationFacePrime(currentCube[2]);
        this.cubeArray = currentCube;
    }
    elementsToMoveBack(currentCube) {
        const whiteFace = currentCube[0].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        const orangeFace = currentCube[1].filter((_element, i)=>i === 0 || i === 3 || i === 6);
        const redFace = currentCube[3].filter((_element, i)=>i === 2 || i === 5 || i === 8);
        const yellowFace = currentCube[5].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        return {
            whiteFace,
            orangeFace,
            redFace,
            yellowFace
        };
    }
    moveBack() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , orangeFace , redFace , yellowFace  } = this.elementsToMoveBack(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i, 1, redFace[i]);
            currentCube[1].splice(i * 3, 1, whiteFace[2 - i]);
            currentCube[3].splice(i * 3 + 2, 1, yellowFace[2 - i]);
            currentCube[5].splice(6 + i, 1, orangeFace[i]);
        }
        currentCube[4] = this.rotationFace(currentCube[4]);
        this.cubeArray = currentCube;
    }
    moveBackPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , orangeFace , redFace , yellowFace  } = this.elementsToMoveBack(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(i, 1, orangeFace[2 - i]);
            currentCube[1].splice(i * 3, 1, yellowFace[i]);
            currentCube[3].splice(i * 3 + 2, 1, whiteFace[i]);
            currentCube[5].splice(6 + i, 1, redFace[2 - i]);
        }
        currentCube[4] = this.rotationFacePrime(currentCube[4]);
        this.cubeArray = currentCube;
    }
    elementsToMoveUp(currentCube) {
        const orangeFace = currentCube[1].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        const greenFace = currentCube[2].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        const redFace = currentCube[3].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        const blueFace = currentCube[4].filter((_element, i)=>i === 0 || i === 1 || i === 2);
        return {
            orangeFace,
            greenFace,
            redFace,
            blueFace
        };
    }
    moveUp() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { orangeFace , greenFace , redFace , blueFace  } = this.elementsToMoveUp(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[1].splice(i, 1, greenFace[i]);
            currentCube[2].splice(i, 1, redFace[i]);
            currentCube[3].splice(i, 1, blueFace[i]);
            currentCube[4].splice(i, 1, orangeFace[i]);
        }
        currentCube[0] = this.rotationFace(currentCube[0]);
        this.cubeArray = currentCube;
    }
    moveUpPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { orangeFace , greenFace , redFace , blueFace  } = this.elementsToMoveUp(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[1].splice(i, 1, blueFace[i]);
            currentCube[2].splice(i, 1, orangeFace[i]);
            currentCube[3].splice(i, 1, greenFace[i]);
            currentCube[4].splice(i, 1, redFace[i]);
        }
        currentCube[0] = this.rotationFacePrime(currentCube[0]);
        this.cubeArray = currentCube;
    }
    elementsToMoveDown(currentCube) {
        const orangeFace = currentCube[1].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        const greenFace = currentCube[2].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        const redFace = currentCube[3].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        const blueFace = currentCube[4].filter((_element, i)=>i === 6 || i === 7 || i === 8);
        return {
            orangeFace,
            greenFace,
            redFace,
            blueFace
        };
    }
    moveDown() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { orangeFace , greenFace , redFace , blueFace  } = this.elementsToMoveDown(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[1].splice(6 + i, 1, blueFace[i]);
            currentCube[2].splice(6 + i, 1, orangeFace[i]);
            currentCube[3].splice(6 + i, 1, greenFace[i]);
            currentCube[4].splice(6 + i, 1, redFace[i]);
        }
        currentCube[5] = this.rotationFace(currentCube[5]);
        this.cubeArray = currentCube;
    }
    moveDownPrime() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { orangeFace , greenFace , redFace , blueFace  } = this.elementsToMoveDown(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[1].splice(6 + i, 1, greenFace[i]);
            currentCube[2].splice(6 + i, 1, redFace[i]);
            currentCube[3].splice(6 + i, 1, blueFace[i]);
            currentCube[4].splice(6 + i, 1, orangeFace[i]);
        }
        currentCube[5] = this.rotationFacePrime(currentCube[5]);
        this.cubeArray = currentCube;
    }
    rotateX() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[0] = this.cubeArray[2];
        newCube[2] = this.cubeArray[5];
        newCube[5] = this.cubeArray[4];
        newCube[4] = this.cubeArray[0];
        newCube[4] = this.rotationFace(this.rotationFace(newCube[4]));
        newCube[5] = this.rotationFace(this.rotationFace(newCube[5]));
        newCube[3] = this.rotationFace(newCube[3]);
        newCube[1] = this.rotationFacePrime(newCube[1]);
        this.cubeArray = newCube;
    }
    rotateXi() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[0] = this.cubeArray[4];
        newCube[4] = this.cubeArray[5];
        newCube[5] = this.cubeArray[2];
        newCube[2] = this.cubeArray[0];
        newCube[0] = this.rotationFace(this.rotationFace(newCube[0]));
        newCube[4] = this.rotationFace(this.rotationFace(newCube[4]));
        newCube[3] = this.rotationFacePrime(newCube[3]);
        newCube[1] = this.rotationFace(newCube[1]);
        this.cubeArray = newCube;
    }
    rotateY() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[2] = this.cubeArray[3];
        newCube[3] = this.cubeArray[4];
        newCube[4] = this.cubeArray[1];
        newCube[1] = this.cubeArray[2];
        newCube[0] = this.rotationFace(newCube[0]);
        newCube[5] = this.rotationFacePrime(newCube[5]);
        this.cubeArray = newCube;
    }
    rotateYi() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[2] = this.cubeArray[1];
        newCube[1] = this.cubeArray[4];
        newCube[4] = this.cubeArray[3];
        newCube[3] = this.cubeArray[2];
        newCube[0] = this.rotationFacePrime(newCube[0]);
        newCube[5] = this.rotationFace(newCube[5]);
        this.cubeArray = newCube;
    }
    rotateZ() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[0] = this.cubeArray[1];
        newCube[1] = this.cubeArray[5];
        newCube[5] = this.cubeArray[3];
        newCube[3] = this.cubeArray[0];
        newCube[0] = this.rotationFace(newCube[0]);
        newCube[1] = this.rotationFace(newCube[1]);
        newCube[2] = this.rotationFace(this.rotationFace(newCube[2]));
        newCube[3] = this.rotationFace(newCube[3]);
        newCube[4] = this.rotationFace(this.rotationFace(newCube[4]));
        newCube[5] = this.rotationFace(newCube[5]);
        newCube[2] = this.rotationFacePrime(newCube[2]);
        newCube[4] = this.rotationFace(newCube[4]);
        this.cubeArray = newCube;
    }
    rotateZi() {
        const newCube = [
            ...this.cubeArray
        ];
        newCube[0] = this.cubeArray[3];
        newCube[3] = this.cubeArray[5];
        newCube[5] = this.cubeArray[1];
        newCube[1] = this.cubeArray[0];
        newCube[0] = this.rotationFacePrime(newCube[0]);
        newCube[1] = this.rotationFacePrime(newCube[1]);
        newCube[2] = this.rotationFace(this.rotationFace(newCube[2]));
        newCube[3] = this.rotationFacePrime(newCube[3]);
        newCube[4] = this.rotationFace(this.rotationFace(newCube[4]));
        newCube[5] = this.rotationFacePrime(newCube[5]);
        newCube[2] = this.rotationFace(newCube[2]);
        newCube[4] = this.rotationFacePrime(newCube[4]);
        this.cubeArray = newCube;
    }
    elementsToMoveMiddle(currentCube) {
        const whiteFace = currentCube[0].filter((_element, i)=>i === 1 || i === 4 || i === 7);
        const greenFace = currentCube[2].filter((_element, i)=>i === 1 || i === 4 || i === 7);
        const blueFace = currentCube[4].filter((_element, i)=>i === 1 || i === 4 || i === 7);
        const yellowFace = currentCube[5].filter((_element, i)=>i === 1 || i === 4 || i === 7);
        return {
            whiteFace,
            greenFace,
            blueFace,
            yellowFace
        };
    }
    moveMiddle() {
        const currentCube = [
            ...this.cubeArray
        ];
        const { whiteFace , greenFace , blueFace , yellowFace  } = this.elementsToMoveMiddle(currentCube);
        for(let i = 0; i < 3; i++){
            currentCube[0].splice(3 * i + 1, 1, greenFace[i]);
            currentCube[2].splice(3 * i + 1, 1, yellowFace[i]);
            currentCube[4].splice(3 * i + 1, 1, whiteFace[2 - i]);
            currentCube[5].splice(3 * i + 1, 1, blueFace[2 - i]);
        }
        this.cubeArray = currentCube;
    }
}


/***/ }),

/***/ 3450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Il": () => (/* binding */ Color),
/* harmony export */   "ZR": () => (/* binding */ HexColor)
/* harmony export */ });
/* unused harmony export Spin */
var Color;
(function(Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Orange"] = 1] = "Orange";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Blue"] = 4] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
var HexColor;
(function(HexColor) {
    HexColor[HexColor["Red"] = 0xc0392b] = "Red";
    HexColor[HexColor["Green"] = 0x27ae60] = "Green";
    HexColor[HexColor["Blue"] = 0x2980b9] = "Blue";
    HexColor[HexColor["Yellow"] = 0xf1c40f] = "Yellow";
    HexColor[HexColor["Orange"] = 0xd35400] = "Orange";
    HexColor[HexColor["White"] = 0xecf0f1] = "White";
    HexColor[HexColor["Black"] = 0x2d3436] = "Black";
})(HexColor || (HexColor = {}));
var Spin;
(function(Spin) {
    Spin[Spin["Left"] = 0] = "Left";
    Spin[Spin["Right"] = 1] = "Right";
    Spin[Spin["Up"] = 2] = "Up";
    Spin[Spin["Down"] = 3] = "Down";
})(Spin || (Spin = {}));


/***/ })

};
;