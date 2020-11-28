;(window.webpackJsonp = window.webpackJsonp || []).push([
   [0],
   {
      107: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            3,
         )
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )(['\n   background: ', ';\n   border-radius: ', ';\n   box-shadow: ', ';\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var CardWrapper = __webpack_require__(2).d.div(
            _templateObject(),
            function (_ref) {
               return _ref.theme.bgPrimary
            },
            function (_ref2) {
               return _ref2.theme.radiusMain
            },
            function (_ref3) {
               return _ref3.theme.shadow.soft
            },
         )
         __webpack_exports__.a = CardWrapper
      },
      108: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               66,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1)
         __webpack_require__(0)
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   margin: 0;\n   font-weight: ',
               ';\n   font-size: ',
               ';\n   color: ',
               ';\n   text-align: center;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var StyledHeading = __webpack_require__(2).d.h1(
               _templateObject(),
               function (_ref) {
                  var size = _ref.size,
                     theme = _ref.theme
                  return 'h1' === size ? theme.fontWeight.bold : theme.fontWeight.regular
               },
               function (_ref2) {
                  var size = _ref2.size,
                     theme = _ref2.theme
                  switch (size) {
                     case 'h2':
                        return theme.fontSize.l
                     case 'h3':
                     case 'h4':
                        return theme.fontSize.m
                     default:
                        return theme.fontSize.xl
                  }
               },
               function (_ref3) {
                  var size = _ref3.size,
                     theme = _ref3.theme
                  return 'h4' === size && theme.fontSecondary
               },
            ),
            Heading = function Heading(_ref4) {
               var children = _ref4.children,
                  size = _ref4.size,
                  props = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a,
                  )(_ref4, ['children', 'size'])
               return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  StyledHeading,
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                  )(
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                     )({ as: size, size: size }, props),
                     {},
                     { children: children },
                  ),
               )
            }
         ;(Heading.defaultProps = { children: '', size: 'h1' }),
            (Heading.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Heading',
               props: {
                  children: {
                     defaultValue: { value: "''", computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
                  size: {
                     defaultValue: { value: "'h1'", computed: !1 },
                     type: {
                        name: 'enum',
                        value: [
                           { value: "'h1'", computed: !1 },
                           { value: "'h2'", computed: !1 },
                           { value: "'h3'", computed: !1 },
                           { value: "'h4'", computed: !1 },
                        ],
                     },
                     required: !1,
                     description: '',
                  },
               },
            }),
            (__webpack_exports__.a = Heading),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/Heading/Heading.js'] = {
                  name: 'Heading',
                  docgenInfo: Heading.__docgenInfo,
                  path: 'src/components/atoms/Heading/Heading.js',
               })
      },
      109: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_exports__.a = [
            {
               _id: '1',
               name: 'Backbone',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '2',
               name: 'Batflat',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '3',
               name: 'Bootstrap',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '4',
               name: 'Electron',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '5',
               name: 'Git',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '6',
               name: 'MongoDB',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '7',
               name: 'NodeJS',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '8',
               name: 'React',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '9',
               name: 'SassIcon',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
            {
               _id: '10',
               name: 'Webpack',
               image: {
                  path:
                     'data:image/png;base64,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',
               },
            },
         ]
      },
      139: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               242,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               66,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
            components_atoms_PreloadImage_PreloadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
               58,
            ),
            react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
            styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2)
         function _templateObject5() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a,
            )(['\n   position: absolute;\n   top: 0;\n   left: 0;\n   display: ', ';\n'])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a,
            )(['\n         animation: ', ' 0.5s ease-out;\n      '])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a,
            )(['\n   object-fit: cover;\n   width: 100%;\n   height: 100%;\n   ', '\n'])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a,
            )(['\n   position: relative;\n   background: ', ';\n   overflow: hidden;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a,
            )(['\n   from {\n      opacity: 0;\n   }\n\n   to {\n      opacity: 1;\n   }\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Show = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.e)(_templateObject()),
            Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.d.div(
               _templateObject2(),
               function (_ref) {
                  return _ref.theme.bgBadge
               },
            ),
            IMG = styled_components__WEBPACK_IMPORTED_MODULE_7__.d.img(
               _templateObject3(),
               function (_ref2) {
                  return (
                     _ref2.show &&
                     Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.c)(
                        _templateObject4(),
                        Show,
                     )
                  )
               },
            ),
            StyledPreloadImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.d)(
               components_atoms_PreloadImage_PreloadImage__WEBPACK_IMPORTED_MODULE_5__.a,
            )(_templateObject5(), function (_ref3) {
               return _ref3.show ? 'block' : 'none'
            }),
            Image = function Image(_ref4) {
               var src = _ref4.src,
                  alt = _ref4.alt,
                  props = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a,
                  )(_ref4, ['src', 'alt']),
                  _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(!1),
                  _useState2 = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a,
                  )(_useState, 2),
                  loaded = _useState2[0],
                  setLoaded = _useState2[1]
               return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                  Wrapper,
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                  )(
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                     )({}, props),
                     {},
                     {
                        children: [
                           src &&
                              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IMG, {
                                 src: src,
                                 alt: alt,
                                 onLoad: function onLoad() {
                                    return setLoaded(!0)
                                 },
                                 show: loaded,
                              }),
                           Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx,
                           )(StyledPreloadImage, { width: '100%', height: '100%', show: !loaded }),
                        ],
                     },
                  ),
               )
            }
         ;(Image.defaultProps = { src: null, alt: '' }),
            (Image.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Image',
               props: {
                  src: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
                  alt: {
                     defaultValue: { value: "''", computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
               },
            }),
            (__webpack_exports__.a = Image),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Image/Image.js'] = {
                  name: 'Image',
                  docgenInfo: Image.__docgenInfo,
                  path: 'src/components/molecules/Image/Image.js',
               })
      },
      140: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.d(__webpack_exports__, 'b', function () {
            return sort
         }),
            __webpack_require__.d(__webpack_exports__, 'a', function () {
               return category
            }),
            __webpack_require__.d(__webpack_exports__, 'c', function () {
               return technologies
            })
         var sort = [
               { _id: '1', value: 'date', display: 'data', displayList: 'Data' },
               {
                  _id: '2',
                  value: 'technologycount',
                  display: 'technologie',
                  displayList: 'Ilość technologii',
               },
               { _id: '3', value: 'type', display: 'typ', displayList: 'Typ' },
            ],
            category = [
               { _id: '1', value: 'all', display: 'wszystko', displayList: 'Wszystko' },
               { _id: '2', value: 'applications', display: 'aplikacje', displayList: 'Aplikacje' },
               { _id: '3', value: 'templates', display: 'szablony', displayList: 'Szablony' },
               { _id: '4', value: 'games', display: 'gry', displayList: 'Gry' },
               { _id: '5', value: 'libraries', display: 'biblioteki', displayList: 'Biblioteki' },
            ],
            technologies = [
               { _id: '1', value: 'all', display: 'wszystko', displayList: 'Wszystko' },
               { _id: '2', value: 'react', display: 'react', displayList: 'React' },
               { _id: '3', value: 'js', display: 'vanilla js', displayList: 'Vanilla js' },
               { _id: '4', value: 'php', display: 'php', displayList: 'czysty PHP' },
            ]
      },
      1485: function (module, exports, __webpack_require__) {
         'use strict'
         var _clientApi = __webpack_require__(69),
            _clientLogger = __webpack_require__(44),
            _configFilename = __webpack_require__(1510)
         function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object)
            if (Object.getOwnPropertySymbols) {
               var symbols = Object.getOwnPropertySymbols(object)
               enumerableOnly &&
                  (symbols = symbols.filter(function (sym) {
                     return Object.getOwnPropertyDescriptor(object, sym).enumerable
                  })),
                  keys.push.apply(keys, symbols)
            }
            return keys
         }
         function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
               var source = null != arguments[i] ? arguments[i] : {}
               i % 2
                  ? ownKeys(Object(source), !0).forEach(function (key) {
                       _defineProperty(target, key, source[key])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                  : ownKeys(Object(source)).forEach(function (key) {
                       Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key),
                       )
                    })
            }
            return target
         }
         function _defineProperty(obj, key, value) {
            return (
               key in obj
                  ? Object.defineProperty(obj, key, {
                       value: value,
                       enumerable: !0,
                       configurable: !0,
                       writable: !0,
                    })
                  : (obj[key] = value),
               obj
            )
         }
         ;(_configFilename.args || _configFilename.argTypes) &&
            _clientLogger.logger.warn(
               'Invalid args/argTypes in config, ignoring.',
               JSON.stringify({ args: _configFilename.args, argTypes: _configFilename.argTypes }),
            ),
            _configFilename.decorators &&
               _configFilename.decorators.forEach(function (decorator) {
                  return (0, _clientApi.addDecorator)(decorator, !1)
               }),
            (_configFilename.parameters ||
               _configFilename.globals ||
               _configFilename.globalTypes) &&
               (0, _clientApi.addParameters)(
                  _objectSpread(
                     _objectSpread({}, _configFilename.parameters),
                     {},
                     { globals: _configFilename.globals, globalTypes: _configFilename.globalTypes },
                  ),
                  !1,
               ),
            _configFilename.argTypesEnhancers &&
               _configFilename.argTypesEnhancers.forEach(function (enhancer) {
                  return (0, _clientApi.addArgTypesEnhancer)(enhancer)
               })
      },
      1487: function (module, exports, __webpack_require__) {
         'use strict'
         ;(function (module) {
            ;(0, __webpack_require__(229).configure)([__webpack_require__(1488)], module, !1)
         }.call(this, __webpack_require__(123)(module)))
      },
      1488: function (module, exports, __webpack_require__) {
         var map = {
            './components/atoms/BackgroundSection/BackgroundSection.stories.js': 1507,
            './components/atoms/Badge/Badge.stories.js': 1489,
            './components/atoms/CardWrapper/CardWrappper.stories.js': 1490,
            './components/atoms/Heading/Heading.stories.js': 1491,
            './components/atoms/Icon/Icon.stories.js': 1512,
            './components/atoms/PreloadImage/PreloadImage.stories.js': 1492,
            './components/atoms/SVG/SVG.stories.js': 1511,
            './components/atoms/Text/Text.stories.js': 1493,
            './components/molecules/ArrowButton/ArrowButton.stories.js': 1494,
            './components/molecules/Button/Button.stories.js': 1513,
            './components/molecules/Dropdown/Dropdown.stories.js': 1498,
            './components/molecules/Image/Image.stories.js': 1499,
            './components/molecules/PreloadCard/PreloadCard.stories.js': 1514,
            './components/molecules/PreloadTechnologyStack/PreloadTechnologyStack.stories.js': 1515,
            './components/molecules/PreloadText/PreloadText.stories.js': 1516,
            './components/molecules/SearchInput/SearchInput.stories.js': 1500,
            './components/molecules/TechnologyStack/TechnologyStack.stories.js': 1520,
            './components/molecules/TechnologyStackSmall/TechnologyStackSmall.stories.js': 1501,
            './components/organisms/Card/Card.stories.js': 1518,
            './components/organisms/FilterPanel/FilterPanel.stories.js': 1519,
            './components/organisms/Navigation/Navigation.stories.js': 1508,
            './components/organisms/ProjectHeader/ProjectHeader.stories.js': 1521,
         }
         function webpackContext(req) {
            var id = webpackContextResolve(req)
            return __webpack_require__(id)
         }
         function webpackContextResolve(req) {
            if (!__webpack_require__.o(map, req)) {
               var e = new Error("Cannot find module '" + req + "'")
               throw ((e.code = 'MODULE_NOT_FOUND'), e)
            }
            return map[req]
         }
         ;(webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map)
         }),
            (webpackContext.resolve = webpackContextResolve),
            (module.exports = webpackContext),
            (webpackContext.id = 1488)
      },
      1489: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_atoms_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182)
         __webpack_require__(0)
         __webpack_exports__.default = {
            component: components_atoms_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Atoms/Badge',
         }
         var Basic = function Basic() {
            return Object(
               react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
            )(components_atoms_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__.a, {
               children: '#Aplikacja',
            })
         }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )({ storySource: { source: '() => <Badge>#Aplikacja</Badge>' } }, Basic.parameters)),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/Badge/Badge.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/atoms/Badge/Badge.stories.js',
               })
      },
      1490: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
            components_atoms_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
               107,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_5__ =
               (__webpack_require__(0), __webpack_require__(2))
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
            )(['\n   padding: 20px;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
            )(['\n   max-width: 500px;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject()),
            Content = styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject2())
         __webpack_exports__.default = {
            component: components_atoms_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_3__.a,
            title: 'Atoms/CardWrapper',
         }
         var Basic = function Basic() {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper, {
               children: Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx,
               )(components_atoms_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_3__.a, {
                  children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Content, {
                     children: 'Lorem ipsum dolor sit amet',
                  }),
               }),
            })
         }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )(
            {
               storySource: {
                  source:
                     '() => (\n   <Wrapper>\n      <CardWrapper>\n         <Content>Lorem ipsum dolor sit amet</Content>\n      </CardWrapper>\n   </Wrapper>\n)',
               },
            },
            Basic.parameters,
         )),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/atoms/CardWrapper/CardWrappper.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/atoms/CardWrapper/CardWrappper.stories.js',
               })
      },
      1491: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108)
         __webpack_require__(0)
         __webpack_exports__.default = {
            component: components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Atoms/Heading',
            argTypes: {
               size: { control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4'] } },
               children: { control: 'text' },
            },
         }
         var Basic = function Basic(_ref) {
            var size = _ref.size,
               children = _ref.children
            return Object(
               react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
            )(components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__.a, {
               size: size,
               children: children,
            })
         }
         ;(Basic.args = { size: 'h1', children: 'Heading test' }),
            (Basic.parameters = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
               {
                  storySource: {
                     source: '({ size, children }) => <Heading size={size}>{children}</Heading>',
                  },
               },
               Basic.parameters,
            )),
            (Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: {
                  size: { type: { name: 'string' }, required: !0, description: '' },
                  children: { type: { name: 'string' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/Heading/Heading.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/atoms/Heading/Heading.stories.js',
               })
      },
      1492: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_atoms_PreloadImage_PreloadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               58,
            )
         __webpack_require__(0)
         __webpack_exports__.default = {
            component: components_atoms_PreloadImage_PreloadImage__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Atoms/PreloadImage',
            argTypes: { width: { control: 'number' }, height: { control: 'number' } },
         }
         var Basic = function Basic(_ref) {
            var width = _ref.width,
               height = _ref.height
            return Object(
               react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
            )(components_atoms_PreloadImage_PreloadImage__WEBPACK_IMPORTED_MODULE_2__.a, {
               width: ''.concat(width, 'px'),
               height: ''.concat(height, 'px'),
            })
         }
         ;(Basic.args = { width: 500, height: 300 }),
            (Basic.parameters = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
               {
                  storySource: {
                     source:
                        '({ width, height }) => (\n   <PreloadImage width={`${width}px`} height={`${height}px`} />\n)',
                  },
               },
               Basic.parameters,
            )),
            (Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: {
                  width: { type: { name: 'number' }, required: !0, description: '' },
                  height: { type: { name: 'number' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/atoms/PreloadImage/PreloadImage.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/atoms/PreloadImage/PreloadImage.stories.js',
               })
      },
      1493: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
            components_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183)
         __webpack_require__(0)
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
            )(['\n   max-width: 700px;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = __webpack_require__(2).d.div(_templateObject())
         __webpack_exports__.default = {
            components: components_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_3__.a,
            title: 'Atoms/Text',
            argTypes: { small: { control: 'boolean' } },
         }
         var Basic = function Basic(_ref) {
            var small = _ref.small
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper, {
               children: Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx,
               )(components_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_3__.a, {
                  small: small,
                  children:
                     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat. Pellentesque habitant morbi tristique',
               }),
            })
         }
         ;(Basic.args = { small: !1 }),
            (Basic.parameters = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
               {
                  storySource: {
                     source:
                        '({ small }) => (\n   <Wrapper>\n      <Text small={small}>\n         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac\n         elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.\n         Pellentesque habitant morbi tristique\n      </Text>\n   </Wrapper>\n)',
                  },
               },
               Basic.parameters,
            )),
            (Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: { small: { type: { name: 'bool' }, required: !0, description: '' } },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/Text/Text.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/atoms/Text/Text.stories.js',
               })
      },
      1494: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_molecules_ArrowButton_ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               184,
            ),
            storybook_react_router__WEBPACK_IMPORTED_MODULE_4__ =
               (__webpack_require__(0), __webpack_require__(241)),
            storybook_react_router__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
               storybook_react_router__WEBPACK_IMPORTED_MODULE_4__,
            )
         __webpack_exports__.default = {
            component: components_molecules_ArrowButton_ArrowButton__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Molecules/ArrowButton',
            decorators: [storybook_react_router__WEBPACK_IMPORTED_MODULE_4___default()()],
            argTypes: { prev: { control: 'boolean' } },
         }
         var Basic = function Basic(_ref) {
            var prev = _ref.prev
            return Object(
               react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
            )(components_molecules_ArrowButton_ArrowButton__WEBPACK_IMPORTED_MODULE_2__.a, {
               prev: prev,
            })
         }
         ;(Basic.args = { prev: !1 }),
            (Basic.parameters = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
               { storySource: { source: '({ prev }) => <ArrowButton prev={prev} />' } },
               Basic.parameters,
            )),
            (Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: { prev: { type: { name: 'bool' }, required: !0, description: '' } },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/ArrowButton/ArrowButton.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/molecules/ArrowButton/ArrowButton.stories.js',
               })
      },
      1498: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            }),
            __webpack_require__.d(__webpack_exports__, 'WithSort', function () {
               return WithSort
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_molecules_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               153,
            ),
            testData_dropdown__WEBPACK_IMPORTED_MODULE_4__ =
               (__webpack_require__(0), __webpack_require__(140))
         __webpack_exports__.default = {
            component: components_molecules_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Molecules/Dropdown',
         }
         var Basic = function Basic() {
               return Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
               )(components_molecules_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__.a, {
                  options: testData_dropdown__WEBPACK_IMPORTED_MODULE_4__.a,
                  label: 'Filtruj',
                  defaultvalue: 'all',
               })
            },
            WithSort = function WithSort() {
               return Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
               )(components_molecules_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__.a, {
                  options: testData_dropdown__WEBPACK_IMPORTED_MODULE_4__.b,
                  label: 'Sortuj',
                  defaultvalue: 'date',
                  sort: !0,
               })
            }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )(
            {
               storySource: {
                  source:
                     '() => <Dropdown options={category} label="Filtruj" defaultvalue="all" />',
               },
            },
            Basic.parameters,
         )),
            (WithSort.parameters = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
               {
                  storySource: {
                     source:
                        '() => <Dropdown options={sort} label="Sortuj" defaultvalue="date" sort />',
                  },
               },
               WithSort.parameters,
            )),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Dropdown/Dropdown.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/molecules/Dropdown/Dropdown.stories.js',
               }),
            (WithSort.__docgenInfo = { description: '', methods: [], displayName: 'WithSort' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Dropdown/Dropdown.stories.js'] = {
                  name: 'WithSort',
                  docgenInfo: WithSort.__docgenInfo,
                  path: 'src/components/molecules/Dropdown/Dropdown.stories.js',
               })
      },
      1499: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
            components_molecules_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
               139,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_5__ =
               (__webpack_require__(0), __webpack_require__(2))
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
            )(['\n   width: 500px;\n   height: 300px;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var StyledImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.d)(
            components_molecules_Image_Image__WEBPACK_IMPORTED_MODULE_3__.a,
         )(_templateObject())
         __webpack_exports__.default = {
            component: components_molecules_Image_Image__WEBPACK_IMPORTED_MODULE_3__.a,
            title: 'Molecules/Image',
         }
         var Basic = function Basic() {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledImage, {
               src: 'https://picsum.photos/4000',
            })
         }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )(
            { storySource: { source: '() => <StyledImage src="https://picsum.photos/4000" />' } },
            Basic.parameters,
         )),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Image/Image.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/molecules/Image/Image.stories.js',
               })
      },
      1500: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_molecules_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               185,
            )
         __webpack_require__(0)
         __webpack_exports__.default = {
            component: components_molecules_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Molecules/SearchInput',
         }
         var Basic = function Basic() {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
               components_molecules_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_2__.a,
               {},
            )
         }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )({ storySource: { source: '() => <SearchInput />' } }, Basic.parameters)),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/SearchInput/SearchInput.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path: 'src/components/molecules/SearchInput/SearchInput.stories.js',
               })
      },
      1501: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Basic
            })
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            components_molecules_TechnologyStackSmall_TechnologyStackSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               186,
            ),
            testData_technologies__WEBPACK_IMPORTED_MODULE_4__ =
               (__webpack_require__(0), __webpack_require__(109))
         __webpack_exports__.default = {
            comnponent:
               components_molecules_TechnologyStackSmall_TechnologyStackSmall__WEBPACK_IMPORTED_MODULE_2__.a,
            title: 'Molecules/TechnologyStackSmall',
         }
         var Basic = function Basic() {
            return Object(
               react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx,
            )(
               components_molecules_TechnologyStackSmall_TechnologyStackSmall__WEBPACK_IMPORTED_MODULE_2__.a,
               { technologies: testData_technologies__WEBPACK_IMPORTED_MODULE_4__.a },
            )
         }
         ;(Basic.parameters = Object(
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
         )(
            {
               storySource: {
                  source: '() => <TechnologyStackSmall technologies={technologies} />',
               },
            },
            Basic.parameters,
         )),
            (Basic.__docgenInfo = { description: '', methods: [], displayName: 'Basic' }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/TechnologyStackSmall/TechnologyStackSmall.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Basic.__docgenInfo,
                  path:
                     'src/components/molecules/TechnologyStackSmall/TechnologyStackSmall.stories.js',
               })
      },
      1507: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return BackgroundSection_stories_Basic
            }),
            __webpack_require__.d(__webpack_exports__, 'Sections', function () {
               return BackgroundSection_stories_Sections
            })
         var objectSpread2 = __webpack_require__(9),
            taggedTemplateLiteral = __webpack_require__(3),
            jsx_runtime = __webpack_require__(1),
            bgBottom = __webpack_require__.p + 'static/media/bgBottom.757ea6b8.png',
            bgCenter = __webpack_require__.p + 'static/media/bgCenter.3da42143.png',
            bgTop = __webpack_require__.p + 'static/media/bgTop.1e1d3791.png',
            styled_components_browser_esm = __webpack_require__(2)
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n                  background-image: url(',
               ');\n                  top: 0;\n                  background-position: center top;\n               ',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n                  background-image: url(',
               ');\n                  bottom: 0;\n                  background-position: center bottom;\n               ',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n                  background-image: url(',
               ');\n                  top: 50%;\n                  transform: translateY(-50%);\n                  background-position: center;\n               ',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               "\n   position: relative;\n   min-height: 100vh;\n\n   ::before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 75vw;\n      background-size: 100% auto;\n      background-repeat: no-repeat;\n      z-index: -1;\n\n      ",
               '\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var BackgroundSection_BackgroundSection = styled_components_browser_esm.d.div(
            _templateObject(),
            function (_ref) {
               switch (_ref.background) {
                  case 'center':
                     return Object(styled_components_browser_esm.c)(_templateObject2(), bgCenter)
                  case 'bottom':
                     return Object(styled_components_browser_esm.c)(_templateObject3(), bgBottom)
                  default:
                     return Object(styled_components_browser_esm.c)(_templateObject4(), bgTop)
               }
            },
         )
         __webpack_require__(0)
         function BackgroundSection_stories_templateObject2() {
            var data = Object(taggedTemplateLiteral.a)(['\n   padding-top: 100px;\n'])
            return (
               (BackgroundSection_stories_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function BackgroundSection_stories_templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   max-width: 700px;\n   margin: auto;\n',
            ])
            return (
               (BackgroundSection_stories_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.div(
               BackgroundSection_stories_templateObject(),
            ),
            Separator = styled_components_browser_esm.d.div(
               BackgroundSection_stories_templateObject2(),
            ),
            BackgroundSection_stories_TestContent = function TestContent() {
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(Separator, {}),
                     Object(jsx_runtime.jsx)('p', {
                        children:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel tellus semper sagittis. In in porta massa.',
                     }),
                     Object(jsx_runtime.jsx)('p', {
                        children:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel tellus semper sagittis. In in porta massa.',
                     }),
                     Object(jsx_runtime.jsx)('p', {
                        children:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel tellus semper sagittis. In in porta massa.',
                     }),
                     Object(jsx_runtime.jsx)(Separator, {}),
                  ],
               })
            },
            BackgroundSection_stories_Basic =
               ((__webpack_exports__.default = {
                  component: BackgroundSection_BackgroundSection,
                  title: 'Atoms/BackgroundSection',
                  argTypes: {
                     background: {
                        control: { type: 'select', options: ['top', 'center', 'bottom'] },
                     },
                  },
               }),
               function Basic(_ref) {
                  var background = _ref.background
                  return Object(jsx_runtime.jsx)(BackgroundSection_BackgroundSection, {
                     background: background,
                     children: Object(jsx_runtime.jsx)(BackgroundSection_stories_TestContent, {}),
                  })
               })
         BackgroundSection_stories_Basic.args = { background: 'top' }
         var BackgroundSection_stories_Sections = function Sections() {
            return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
               children: [
                  Object(jsx_runtime.jsx)(BackgroundSection_BackgroundSection, {
                     background: 'top',
                     children: Object(jsx_runtime.jsx)(BackgroundSection_stories_TestContent, {}),
                  }),
                  Object(jsx_runtime.jsx)(BackgroundSection_BackgroundSection, {
                     background: 'center',
                     children: Object(jsx_runtime.jsx)(BackgroundSection_stories_TestContent, {}),
                  }),
                  Object(jsx_runtime.jsx)(BackgroundSection_BackgroundSection, {
                     background: 'bottom',
                     children: Object(jsx_runtime.jsx)(BackgroundSection_stories_TestContent, {}),
                  }),
               ],
            })
         }
         ;(BackgroundSection_stories_Basic.parameters = Object(objectSpread2.a)(
            {
               storySource: {
                  source:
                     '({ background }) => (\n   <BackgroundSection background={background}>\n      <TestContent />\n   </BackgroundSection>\n)',
               },
            },
            BackgroundSection_stories_Basic.parameters,
         )),
            (BackgroundSection_stories_Sections.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        '() => (\n   <>\n      <BackgroundSection background="top">\n         <TestContent />\n      </BackgroundSection>\n      <BackgroundSection background="center">\n         <TestContent />\n      </BackgroundSection>\n      <BackgroundSection background="bottom">\n         <TestContent />\n      </BackgroundSection>\n   </>\n)',
                  },
               },
               BackgroundSection_stories_Sections.parameters,
            )),
            (BackgroundSection_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: { background: { type: { name: 'string' }, required: !0, description: '' } },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/atoms/BackgroundSection/BackgroundSection.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: BackgroundSection_stories_Basic.__docgenInfo,
                  path: 'src/components/atoms/BackgroundSection/BackgroundSection.stories.js',
               }),
            (BackgroundSection_stories_Sections.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Sections',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/atoms/BackgroundSection/BackgroundSection.stories.js'
               ] = {
                  name: 'Sections',
                  docgenInfo: BackgroundSection_stories_Sections.__docgenInfo,
                  path: 'src/components/atoms/BackgroundSection/BackgroundSection.stories.js',
               })
      },
      1508: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Navigation_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            taggedTemplateLiteral = __webpack_require__(3),
            english = __webpack_require__.p + 'static/media/english.edd87ebb.svg',
            github = __webpack_require__.p + 'static/media/github.e1de1b7b.svg',
            polish = __webpack_require__.p + 'static/media/polish.6097c2d2.svg',
            Icon = __webpack_require__(93),
            ArrowButton = __webpack_require__(184),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject7() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   margin: 20px 0;\n   cursor: pointer;\n',
            ])
            return (
               (_templateObject7 = function _templateObject7() {
                  return data
               }),
               data
            )
         }
         function _templateObject6() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n         transform: translateY(-84px);\n      ',
            ])
            return (
               (_templateObject6 = function _templateObject6() {
                  return data
               }),
               data
            )
         }
         function _templateObject5() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   will-change: transform;\n   transition: transform 0.3s ease-out;\n\n   ',
               '\n',
            ])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n              transform: scale(0);\n              pointer-events: none;\n           ',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n              transform: scale(1);\n              pointer-events: all;\n           ',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   will-change: transform;\n   transition: transform 0.2s ease-out;\n   height: 64px;\n\n   ',
               '\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   position: fixed;\n   top: 0;\n   left: 0;\n   width: 104px;\n   padding: 20px;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.nav(_templateObject()),
            BackButton = Object(styled_components_browser_esm.d)(ArrowButton.a)(
               _templateObject2(),
               function (_ref) {
                  return _ref.to
                     ? Object(styled_components_browser_esm.c)(_templateObject3())
                     : Object(styled_components_browser_esm.c)(_templateObject4())
               },
            ),
            NavList = styled_components_browser_esm.d.div(_templateObject5(), function (_ref2) {
               return _ref2.up && Object(styled_components_browser_esm.c)(_templateObject6())
            }),
            StyledIcon = Object(styled_components_browser_esm.d)(Icon.a)(_templateObject7()),
            Navigation_Navigation = function Navigation(_ref3) {
               var backlink = _ref3.backlink,
                  language = _ref3.language
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(BackButton, { prev: !0, to: backlink }),
                     Object(jsx_runtime.jsxs)(NavList, {
                        up: !backlink,
                        children: [
                           Object(jsx_runtime.jsx)(StyledIcon, {
                              src: 'pl' === language ? polish : english,
                           }),
                           Object(jsx_runtime.jsx)('a', {
                              href: 'https://github.com/RiddickAbaddon',
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              children: Object(jsx_runtime.jsx)(Icon.a, {
                                 target: !0,
                                 src: github,
                              }),
                           }),
                        ],
                     }),
                  ],
               })
            }
         ;(Navigation_Navigation.defaultProps = { backlink: null }),
            (Navigation_Navigation.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Navigation',
               props: {
                  backlink: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
                  language: {
                     type: {
                        name: 'enum',
                        value: [
                           { value: "'pl'", computed: !1 },
                           { value: "'eng'", computed: !1 },
                        ],
                     },
                     required: !0,
                     description: '',
                  },
               },
            })
         var organisms_Navigation_Navigation = Navigation_Navigation
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/organisms/Navigation/Navigation.js'] = {
               name: 'Navigation',
               docgenInfo: Navigation_Navigation.__docgenInfo,
               path: 'src/components/organisms/Navigation/Navigation.js',
            })
         var dist_react = __webpack_require__(241),
            dist_react_default = __webpack_require__.n(dist_react),
            Navigation_stories_Basic =
               ((__webpack_exports__.default = {
                  components: organisms_Navigation_Navigation,
                  title: 'Organisms/Navigation',
                  decorators: [dist_react_default()()],
                  argTypes: {
                     backlink: { control: 'boolean' },
                     language: { control: { type: 'inline-radio', options: ['pl', 'eng'] } },
                  },
               }),
               function Basic(_ref) {
                  var backlink = _ref.backlink,
                     language = _ref.language
                  return Object(jsx_runtime.jsx)(organisms_Navigation_Navigation, {
                     backlink: backlink ? '/back' : null,
                     language: language,
                  })
               })
         ;(Navigation_stories_Basic.args = { backlink: !1, language: 'pl' }),
            (Navigation_stories_Basic.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        "({ backlink, language }) => (\n   <Navigation backlink={backlink ? '/back' : null} language={language} />\n)",
                  },
               },
               Navigation_stories_Basic.parameters,
            )),
            (Navigation_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: {
                  backlink: { type: { name: 'bool' }, required: !0, description: '' },
                  language: { type: { name: 'string' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/organisms/Navigation/Navigation.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: Navigation_stories_Basic.__docgenInfo,
                  path: 'src/components/organisms/Navigation/Navigation.stories.js',
               })
      },
      1510: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'parameters', function () {
               return parameters
            })
         var jsx_runtime = __webpack_require__(1),
            client = __webpack_require__(229),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2)),
            taggedTemplateLiteral = __webpack_require__(3)
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   *, *::before, *::after {\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n   }\n\n   html {\n      font-size: 10px;\n      font-family: ',
               ';\n   }\n\n   body {\n      margin: 0;\n      padding: 0;\n      font-size: ',
               ';\n      background: ',
               ';\n      color: ',
               ';\n   }\n\n   input, button, textarea {\n      font-family: ',
               ';\n   }\n\n\n   ::selection {\n      background: ',
               ';\n      color: black;\n   }\n\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var theme_GlobalStyle = Object(styled_components_browser_esm.b)(
               _templateObject(),
               function (_ref) {
                  return _ref.theme.fontFamily
               },
               function (_ref2) {
                  return _ref2.theme.fontSize.m
               },
               function (_ref3) {
                  return _ref3.theme.bgMain
               },
               function (_ref4) {
                  return _ref4.theme.fontPrimary
               },
               function (_ref5) {
                  return _ref5.theme.fontFamily
               },
               function (_ref6) {
                  return _ref6.theme.selectionColor
               },
            ),
            theme_MainTheme = {
               bgMain: '#353232',
               bgPrimary: '#444141',
               bgSecondary: '#504B4B',
               bgBadge: '#3F3B3B',
               fontPrimary: '#FFFFFF',
               fontSecondary: '#C4C4C4',
               selectionColor: '#FF7A00',
               transparent: {
                  white: { soft: 'rgba(255, 255, 255, 0.1)', mid: 'rgba(255, 255, 255, 0.2)' },
               },
               gradient: {
                  accent: 'linear-gradient(125.64deg, #FF7A00 22.46%, #FF005C 77.9%)',
                  preload:
                     'linear-gradient(90deg, #3F3B3B 0%, #646464 30.2%, #646464 43.46%, #3F3B3B 100%)',
               },
               fontSize: { xl: '7.2rem', l: '3.6rem', m: '2.4rem', s: '1.6rem', xs: '1.2rem' },
               fontWeight: { regular: 400, bold: 700 },
               fontFamily: "'Montserrat', sans-serif",
               shadow: {
                  soft: '0px 5px 25px -5px rgba(0, 0, 0, 0.25)',
                  hard: '0px 5px 25px -5px #000000',
               },
               radiusMain: '20px',
               radiusSecondary: '10px',
               lineMain: '1.5em',
               lineMainNumber: 1.5,
            }
         Object(client.addDecorator)(function (story) {
            return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
               children: Object(jsx_runtime.jsxs)(styled_components_browser_esm.a, {
                  theme: theme_MainTheme,
                  children: [Object(jsx_runtime.jsx)(theme_GlobalStyle, {}), story()],
               }),
            })
         })
         var parameters = { actions: { argTypesRegex: '^on[A-Z].*' } }
      },
      1511: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return SVG_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            _404 = __webpack_require__.p + 'static/media/404.a54c5f2a.svg',
            taggedTemplateLiteral = __webpack_require__(3)
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)(['\n   max-width: 100%;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var SVG_SVG = __webpack_require__(2).d.img(_templateObject()),
            SVG_stories_Basic =
               (__webpack_require__(0),
               (__webpack_exports__.default = { component: SVG_SVG, title: 'Atoms/SVG' }),
               function Basic() {
                  return Object(jsx_runtime.jsx)(SVG_SVG, { src: _404, alt: '404' })
               })
         ;(SVG_stories_Basic.parameters = Object(objectSpread2.a)(
            { storySource: { source: '() => <SVG src={Image404} alt="404" />' } },
            SVG_stories_Basic.parameters,
         )),
            (SVG_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/SVG/SVG.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: SVG_stories_Basic.__docgenInfo,
                  path: 'src/components/atoms/SVG/SVG.stories.js',
               })
      },
      1512: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Icon_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            Icon = __webpack_require__(93),
            Icon_stories_Basic =
               (__webpack_require__(0),
               (__webpack_exports__.default = {
                  component: Icon.a,
                  title: 'Atoms/Icon',
                  argTypes: { small: { control: 'boolean' } },
               }),
               function Basic(_ref) {
                  var small = _ref.small
                  return Object(jsx_runtime.jsx)(Icon.a, {
                     src:
                        'data:image/png;base64,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',
                     small: small,
                  })
               })
         ;(Icon_stories_Basic.args = { small: !1 }),
            (Icon_stories_Basic.parameters = Object(objectSpread2.a)(
               { storySource: { source: '({ small }) => <Icon src={ReactIcon} small={small} />' } },
               Icon_stories_Basic.parameters,
            )),
            (Icon_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: { small: { type: { name: 'bool' }, required: !0, description: '' } },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/atoms/Icon/Icon.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Icon_stories_Basic.__docgenInfo,
                  path: 'src/components/atoms/Icon/Icon.stories.js',
               })
      },
      1513: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Button_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            objectWithoutProperties = __webpack_require__(66),
            taggedTemplateLiteral = __webpack_require__(3),
            GitHub = __webpack_require__(550),
            GitHub_default = __webpack_require__.n(GitHub),
            Link = __webpack_require__(549),
            Link_default = __webpack_require__.n(Link),
            Web = __webpack_require__(551),
            Web_default = __webpack_require__.n(Web),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: block;\n   position: relative;\n   z-index: 1;\n   margin-right: 15px;\n\n   .MuiSvgIcon-root {\n      color: ',
               ' !important;\n      font-size: 32px !important;\n   }\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: block;\n   font-size: ',
               ';\n   color: ',
               ';\n   position: relative;\n   z-index: 1;\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   height: 80px;\n   position: relative;\n   display: inline-flex;\n   text-decoration: none;\n   color: ',
               ';\n   align-items: center;\n   justify-content: center;\n   padding: 0 35px;\n   border: none;\n   border-radius: 40px;\n   background: ',
               ";\n   cursor: pointer;\n   user-select: none;\n   text-align: center;\n   max-width: 100%;\n\n   ::before {\n      content: '';\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      background: ",
               ';\n      border-radius: 38px;\n      z-index: 0;\n      will-change: transform;\n      transition: transform 0.2s ease-out;\n   }\n\n   &:hover::before {\n      transform: scale(0);\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var ButtonWrapper = styled_components_browser_esm.d.button(
               _templateObject(),
               function (_ref) {
                  return _ref.theme.fontPrimary
               },
               function (_ref2) {
                  return _ref2.theme.gradient.accent
               },
               function (_ref3) {
                  return _ref3.theme.bgMain
               },
            ),
            ButtonText = styled_components_browser_esm.d.span(
               _templateObject2(),
               function (_ref4) {
                  return _ref4.theme.fontSize.m
               },
               function (_ref5) {
                  return _ref5.theme.fontPrimary
               },
            ),
            IconWrapper = styled_components_browser_esm.d.span(_templateObject3(), function (
               _ref6,
            ) {
               return _ref6.theme.fontPrimary
            }),
            Button_Button = function Button(_ref7) {
               var children = _ref7.children,
                  icon = _ref7.icon,
                  props = Object(objectWithoutProperties.a)(_ref7, ['children', 'icon'])
               return Object(jsx_runtime.jsxs)(
                  ButtonWrapper,
                  Object(objectSpread2.a)(
                     Object(objectSpread2.a)({}, props),
                     {},
                     {
                        children: [
                           icon &&
                              Object(jsx_runtime.jsxs)(IconWrapper, {
                                 children: [
                                    'link' === icon && Object(jsx_runtime.jsx)(Link_default.a, {}),
                                    'github' === icon &&
                                       Object(jsx_runtime.jsx)(GitHub_default.a, {}),
                                    'web' === icon && Object(jsx_runtime.jsx)(Web_default.a, {}),
                                 ],
                              }),
                           Object(jsx_runtime.jsx)(ButtonText, { children: children }),
                        ],
                     },
                  ),
               )
            }
         ;(Button_Button.defaultProps = { icon: null }),
            (Button_Button.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Button',
               props: {
                  icon: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: {
                        name: 'enum',
                        value: [
                           { value: "'link'", computed: !1 },
                           { value: "'github'", computed: !1 },
                           { value: "'web'", computed: !1 },
                        ],
                     },
                     required: !1,
                     description: '',
                  },
                  children: { type: { name: 'string' }, required: !0, description: '' },
               },
            })
         var molecules_Button_Button = Button_Button
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/molecules/Button/Button.js'] = {
               name: 'Button',
               docgenInfo: Button_Button.__docgenInfo,
               path: 'src/components/molecules/Button/Button.js',
            })
         __webpack_exports__.default = {
            component: molecules_Button_Button,
            title: 'Molecules/Button',
            argTypes: {
               children: { control: 'text' },
               icon: {
                  control: {
                     type: 'select',
                     options: { none: null, Link: 'link', GitHub: 'github', Web: 'web' },
                  },
               },
            },
         }
         var Button_stories_Basic = function Basic(_ref) {
            var children = _ref.children,
               icon = _ref.icon
            return Object(jsx_runtime.jsx)(molecules_Button_Button, {
               icon: icon,
               children: children,
            })
         }
         ;(Button_stories_Basic.args = { children: 'Strona główna', icon: null }),
            (Button_stories_Basic.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source: '({ children, icon }) => <Button icon={icon}>{children}</Button>',
                  },
               },
               Button_stories_Basic.parameters,
            )),
            (Button_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: {
                  children: { type: { name: 'string' }, required: !0, description: '' },
                  icon: { type: { name: 'string' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Button/Button.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Button_stories_Basic.__docgenInfo,
                  path: 'src/components/molecules/Button/Button.stories.js',
               })
      },
      1514: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return PreloadCard_stories_Basic
            }),
            __webpack_require__.d(__webpack_exports__, 'Cards', function () {
               return PreloadCard_stories_Cards
            })
         var objectSpread2 = __webpack_require__(9),
            taggedTemplateLiteral = __webpack_require__(3),
            jsx_runtime = __webpack_require__(1),
            CardWrapper = __webpack_require__(107),
            PreloadImage = __webpack_require__(58),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject9() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 32px;\n   height: 32px;\n   margin-right: 16px;\n   border-radius: 50%;\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject9 = function _templateObject9() {
                  return data
               }),
               data
            )
         }
         function _templateObject8() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   margin-top: 10px;\n   margin-bottom: 20px;\n',
            ])
            return (
               (_templateObject8 = function _templateObject8() {
                  return data
               }),
               data
            )
         }
         function _templateObject7() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   margin: 0 5px;\n   height: 20px;\n   border-radius: 10px;\n   width: ',
               ';\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject7 = function _templateObject7() {
                  return data
               }),
               data
            )
         }
         function _templateObject6() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   border-top-left-radius: ',
               ';\n   border-top-right-radius: ',
               ';\n   height: 200px;\n   flex-shrink: 0;\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject6 = function _templateObject6() {
                  return data
               }),
               data
            )
         }
         function _templateObject5() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   margin-top: auto;\n   height: 64px;\n   padding: 16px;\n   border-bottom-left-radius: ',
               ';\n   border-bottom-right-radius: ',
               ';\n   background: ',
               ';\n   width: 100%;\n   display: flex;\n',
            ])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: ',
               ';\n   height: 15px;\n   border-radius: 8px;\n   margin-bottom: 10px;\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   margin: 25px 0;\n   width: 70%;\n   height: 25px;\n   border-radius: 13px;\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   padding: 0 20px;\n   width: 100%;\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var StyledCardWrapper = Object(styled_components_browser_esm.d)(CardWrapper.a)(
               _templateObject(),
            ),
            Container = styled_components_browser_esm.d.div(_templateObject2()),
            Title = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject3(),
               function (_ref) {
                  return _ref.globaldelay
               },
            ),
            DescriptionLine = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject4(),
               function (_ref2) {
                  return _ref2.width
               },
               function (_ref3) {
                  return _ref3.globaldelay
               },
            ),
            CardFooter = styled_components_browser_esm.d.div(
               _templateObject5(),
               function (_ref4) {
                  return _ref4.theme.radiusMain
               },
               function (_ref5) {
                  return _ref5.theme.radiusMain
               },
               function (_ref6) {
                  return _ref6.theme.bgSecondary
               },
            ),
            Image = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject6(),
               function (_ref7) {
                  return _ref7.theme.radiusMain
               },
               function (_ref8) {
                  return _ref8.theme.radiusMain
               },
               function (_ref9) {
                  return _ref9.globaldelay
               },
            ),
            Tag = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject7(),
               function (_ref10) {
                  return _ref10.width
               },
               function (_ref11) {
                  return (_ref11.delay || 0) + _ref11.globaldelay
               },
            ),
            TagsWrapper = styled_components_browser_esm.d.div(_templateObject8()),
            Icon = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject9(),
               function (_ref12) {
                  return (_ref12.delay || 0) + _ref12.globaldelay
               },
            ),
            delays = (function getDelays() {
               for (var result = [], i = 0; i < 4; i++) result.push(0.025 * i)
               return result
            })(),
            PreloadCard_PreloadCard = function PreloadCard(_ref13) {
               var globalDelay = _ref13.delay
               return Object(jsx_runtime.jsxs)(StyledCardWrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(Image, { globaldelay: globalDelay }),
                     Object(jsx_runtime.jsxs)(Container, {
                        children: [
                           Object(jsx_runtime.jsx)(Title, { globaldelay: globalDelay }),
                           Object(jsx_runtime.jsx)(DescriptionLine, {
                              width: '100%',
                              globaldelay: globalDelay,
                           }),
                           Object(jsx_runtime.jsx)(DescriptionLine, {
                              width: '80%',
                              globaldelay: globalDelay,
                           }),
                           Object(jsx_runtime.jsx)(DescriptionLine, {
                              width: '90%',
                              globaldelay: globalDelay,
                           }),
                           Object(jsx_runtime.jsx)(DescriptionLine, {
                              width: '60%',
                              globaldelay: globalDelay,
                           }),
                           Object(jsx_runtime.jsxs)(TagsWrapper, {
                              children: [
                                 Object(jsx_runtime.jsx)(Tag, {
                                    width: '80px',
                                    globaldelay: globalDelay,
                                 }),
                                 Object(jsx_runtime.jsx)(Tag, {
                                    width: '90px',
                                    delay: 0.06,
                                    globaldelay: globalDelay,
                                 }),
                              ],
                           }),
                        ],
                     }),
                     Object(jsx_runtime.jsx)(CardFooter, {
                        children: delays.map(function (delay) {
                           return Object(jsx_runtime.jsx)(Icon, {
                              delay: delay,
                              globaldelay: globalDelay,
                           })
                        }),
                     }),
                  ],
               })
            }
         ;(PreloadCard_PreloadCard.defaultProps = { delay: 0 }),
            (PreloadCard_PreloadCard.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'PreloadCard',
               props: {
                  delay: {
                     defaultValue: { value: '0', computed: !1 },
                     type: { name: 'number' },
                     required: !1,
                     description: '',
                  },
               },
            })
         var molecules_PreloadCard_PreloadCard = PreloadCard_PreloadCard
         function PreloadCard_stories_templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: grid;\n   grid-template-columns: repeat(3, 1fr);\n   grid-gap: 20px;\n',
            ])
            return (
               (PreloadCard_stories_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function PreloadCard_stories_templateObject() {
            var data = Object(taggedTemplateLiteral.a)(['\n   width: 310px;\n'])
            return (
               (PreloadCard_stories_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/molecules/PreloadCard/PreloadCard.js'] = {
               name: 'PreloadCard',
               docgenInfo: PreloadCard_PreloadCard.__docgenInfo,
               path: 'src/components/molecules/PreloadCard/PreloadCard.js',
            })
         var PreloadCard_stories_CardWrapper = styled_components_browser_esm.d.div(
               PreloadCard_stories_templateObject(),
            ),
            Wrapper = styled_components_browser_esm.d.div(PreloadCard_stories_templateObject2()),
            PreloadCard_stories_Basic =
               ((__webpack_exports__.default = {
                  component: molecules_PreloadCard_PreloadCard,
                  title: 'Molecules/PreloadCard',
               }),
               function Basic() {
                  return Object(jsx_runtime.jsx)(PreloadCard_stories_CardWrapper, {
                     children: Object(jsx_runtime.jsx)(molecules_PreloadCard_PreloadCard, {}),
                  })
               }),
            PreloadCard_stories_Cards = function Cards() {
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(molecules_PreloadCard_PreloadCard, {}),
                     Object(jsx_runtime.jsx)(molecules_PreloadCard_PreloadCard, { delay: 0.2 }),
                     Object(jsx_runtime.jsx)(molecules_PreloadCard_PreloadCard, { delay: 0.4 }),
                  ],
               })
            }
         ;(PreloadCard_stories_Basic.parameters = Object(objectSpread2.a)(
            {
               storySource: {
                  source: '() => (\n   <CardWrapper>\n      <PreloadCard />\n   </CardWrapper>\n)',
               },
            },
            PreloadCard_stories_Basic.parameters,
         )),
            (PreloadCard_stories_Cards.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        '() => (\n   <Wrapper>\n      <PreloadCard />\n      <PreloadCard delay={0.2} />\n      <PreloadCard delay={0.4} />\n   </Wrapper>\n)',
                  },
               },
               PreloadCard_stories_Cards.parameters,
            )),
            (PreloadCard_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/PreloadCard/PreloadCard.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: PreloadCard_stories_Basic.__docgenInfo,
                  path: 'src/components/molecules/PreloadCard/PreloadCard.stories.js',
               }),
            (PreloadCard_stories_Cards.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Cards',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/PreloadCard/PreloadCard.stories.js'
               ] = {
                  name: 'Cards',
                  docgenInfo: PreloadCard_stories_Cards.__docgenInfo,
                  path: 'src/components/molecules/PreloadCard/PreloadCard.stories.js',
               })
      },
      1515: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return PreloadTechnologyStack_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            taggedTemplateLiteral = __webpack_require__(3),
            PreloadImage = __webpack_require__(58),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 64px;\n   height: 64px;\n   margin: 20px 10px;\n   border-radius: 50%;\n   animation-delay: ',
               's;\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   justify-content: center;\n   flex-wrap: wrap;\n   margin-top: 20px;\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 70%;\n   max-width: 600px;\n   margin: 0 auto;\n   height: 44px;\n   border-radius: 22px;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var PreloadTitle = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject(),
            ),
            IconsWrapper = styled_components_browser_esm.d.div(_templateObject2()),
            PreloadIcon = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject3(),
               function (_ref) {
                  return _ref.delay
               },
            ),
            delays = (function getDelays() {
               for (var result = [], i = 0; i < 10; i++) result.push(0.035 * i - 0.06)
               return result
            })(),
            PreloadTechnologyStack_PreloadTechnologyStack = function PreloadTechnologyStack() {
               return Object(jsx_runtime.jsxs)('div', {
                  children: [
                     Object(jsx_runtime.jsx)(PreloadTitle, {}),
                     Object(jsx_runtime.jsx)(IconsWrapper, {
                        children: delays.map(function (delay) {
                           return Object(jsx_runtime.jsx)(PreloadIcon, { delay: delay })
                        }),
                     }),
                  ],
               })
            }
         PreloadTechnologyStack_PreloadTechnologyStack.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'PreloadTechnologyStack',
         }
         var molecules_PreloadTechnologyStack_PreloadTechnologyStack = PreloadTechnologyStack_PreloadTechnologyStack
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
               'src/components/molecules/PreloadTechnologyStack/PreloadTechnologyStack.js'
            ] = {
               name: 'PreloadTechnologyStack',
               docgenInfo: PreloadTechnologyStack_PreloadTechnologyStack.__docgenInfo,
               path: 'src/components/molecules/PreloadTechnologyStack/PreloadTechnologyStack.js',
            })
         __webpack_exports__.default = {
            component: molecules_PreloadTechnologyStack_PreloadTechnologyStack,
            title: 'Molecules/PreloadTechnologyStack',
         }
         var PreloadTechnologyStack_stories_Basic = function Basic() {
            return Object(jsx_runtime.jsx)(
               molecules_PreloadTechnologyStack_PreloadTechnologyStack,
               {},
            )
         }
         ;(PreloadTechnologyStack_stories_Basic.parameters = Object(objectSpread2.a)(
            { storySource: { source: '() => <PreloadTechnologyStack />' } },
            PreloadTechnologyStack_stories_Basic.parameters,
         )),
            (PreloadTechnologyStack_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/PreloadTechnologyStack/PreloadTechnologyStack.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: PreloadTechnologyStack_stories_Basic.__docgenInfo,
                  path:
                     'src/components/molecules/PreloadTechnologyStack/PreloadTechnologyStack.stories.js',
               })
      },
      1516: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return PreloadText_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            taggedTemplateLiteral = __webpack_require__(3),
            PreloadImage = __webpack_require__(58),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   height: 20px;\n   width: ',
               ';\n   margin: 16px auto;\n   border-radius: 10px;\n\n   :first-child {\n      margin-top: 8px;\n   }\n   :last-child {\n      margin-bottom: 8px;\n   }\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)(['\n   max-width: 700px;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.div(_templateObject()),
            PreloadLine = Object(styled_components_browser_esm.d)(PreloadImage.a)(
               _templateObject2(),
               function (_ref) {
                  return _ref.width
               },
            ),
            PreloadText_PreloadText = function PreloadText() {
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(PreloadLine, { width: '100%' }),
                     Object(jsx_runtime.jsx)(PreloadLine, { width: '80%' }),
                     Object(jsx_runtime.jsx)(PreloadLine, { width: '90%' }),
                     Object(jsx_runtime.jsx)(PreloadLine, { width: '60%' }),
                  ],
               })
            }
         PreloadText_PreloadText.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'PreloadText',
         }
         var molecules_PreloadText_PreloadText = PreloadText_PreloadText
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/molecules/PreloadText/PreloadText.js'] = {
               name: 'PreloadText',
               docgenInfo: PreloadText_PreloadText.__docgenInfo,
               path: 'src/components/molecules/PreloadText/PreloadText.js',
            })
         __webpack_exports__.default = {
            component: molecules_PreloadText_PreloadText,
            title: 'Molecules/PreloadText',
         }
         var PreloadText_stories_Basic = function Basic() {
            return Object(jsx_runtime.jsx)(molecules_PreloadText_PreloadText, {})
         }
         ;(PreloadText_stories_Basic.parameters = Object(objectSpread2.a)(
            { storySource: { source: '() => <PreloadText />' } },
            PreloadText_stories_Basic.parameters,
         )),
            (PreloadText_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/PreloadText/PreloadText.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: PreloadText_stories_Basic.__docgenInfo,
                  path: 'src/components/molecules/PreloadText/PreloadText.stories.js',
               })
      },
      1518: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return Card_stories_Basic
            }),
            __webpack_require__.d(__webpack_exports__, 'Cards', function () {
               return Card_stories_Cards
            })
         var objectSpread2 = __webpack_require__(9),
            taggedTemplateLiteral = __webpack_require__(3),
            jsx_runtime = __webpack_require__(1),
            Badge = __webpack_require__(182),
            CardWrapper = __webpack_require__(107),
            Heading = __webpack_require__(108),
            Text = __webpack_require__(183),
            Image = __webpack_require__(139),
            TechnologyStackSmall = __webpack_require__(186),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject7() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   border-top-left-radius: ',
               ';\n   border-top-right-radius: ',
               ';\n   height: 200px;\n   margin-bottom: 10px;\n   flex-shrink: 0;\n',
            ])
            return (
               (_templateObject7 = function _templateObject7() {
                  return data
               }),
               data
            )
         }
         function _templateObject6() {
            var data = Object(taggedTemplateLiteral.a)(['\n   margin-top: auto;\n'])
            return (
               (_templateObject6 = function _templateObject6() {
                  return data
               }),
               data
            )
         }
         function _templateObject5() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   padding: 0 20px;\n   margin: 10px 0 20px 0;\n',
            ])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)(['\n   margin: 5px;\n'])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   justify-content: center;\n   flex-wrap: wrap;\n   margin-bottom: 15px;\n   margin-top: -5px;\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)(['\n   padding: 10px 20px;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   flex-direction: column;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var StyledCardWrapper = Object(styled_components_browser_esm.d)(CardWrapper.a)(
               _templateObject(),
            ),
            StyledHeading = Object(styled_components_browser_esm.d)(Heading.a)(_templateObject2()),
            TagsWrapper = styled_components_browser_esm.d.div(_templateObject3()),
            StyledBadge = Object(styled_components_browser_esm.d)(Badge.a)(_templateObject4()),
            StyledText = Object(styled_components_browser_esm.d)(Text.a)(_templateObject5()),
            StyledTechnologyStack = Object(styled_components_browser_esm.d)(TechnologyStackSmall.a)(
               _templateObject6(),
            ),
            StyledImage = Object(styled_components_browser_esm.d)(Image.a)(
               _templateObject7(),
               function (_ref) {
                  return _ref.theme.radiusMain
               },
               function (_ref2) {
                  return _ref2.theme.radiusMain
               },
            ),
            Card_Card = function Card(_ref3) {
               var title = _ref3.title,
                  image = _ref3.image,
                  description = _ref3.description,
                  tags = _ref3.tags,
                  technologies = _ref3.technologies
               return Object(jsx_runtime.jsxs)(StyledCardWrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(StyledImage, { src: image, alt: title }),
                     Object(jsx_runtime.jsx)(StyledHeading, { size: 'h3', children: title }),
                     Object(jsx_runtime.jsx)(StyledText, {
                        small: !0,
                        lineclamp: 4,
                        children: description,
                     }),
                     tags.length
                        ? Object(jsx_runtime.jsx)(TagsWrapper, {
                             children: tags.map(function (tag) {
                                return Object(jsx_runtime.jsxs)(StyledBadge, {
                                   children: ['#', tag],
                                })
                             }),
                          })
                        : null,
                     Object(jsx_runtime.jsx)(StyledTechnologyStack, { technologies: technologies }),
                  ],
               })
            }
         ;(Card_Card.defaultProps = { description: 'Brak opisu...', tags: [] }),
            (Card_Card.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Card',
               props: {
                  description: {
                     defaultValue: { value: "'Brak opisu...'", computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
                  tags: {
                     defaultValue: { value: '[]', computed: !1 },
                     type: { name: 'arrayOf', value: { name: 'string' } },
                     required: !1,
                     description: '',
                  },
                  title: { type: { name: 'string' }, required: !0, description: '' },
                  image: { type: { name: 'string' }, required: !0, description: '' },
                  technologies: {
                     type: {
                        name: 'arrayOf',
                        value: {
                           name: 'shape',
                           value: {
                              _id: { name: 'string', required: !1 },
                              name: { name: 'string', required: !1 },
                              image: {
                                 name: 'shape',
                                 value: { path: { name: 'string', required: !1 } },
                                 required: !1,
                              },
                           },
                        },
                     },
                     required: !0,
                     description: '',
                  },
               },
            })
         var organisms_Card_Card = Card_Card
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/organisms/Card/Card.js'] = {
               name: 'Card',
               docgenInfo: Card_Card.__docgenInfo,
               path: 'src/components/organisms/Card/Card.js',
            })
         var testData_technologies = __webpack_require__(109)
         function Card_stories_templateObject2() {
            var data = Object(taggedTemplateLiteral.a)(['\n   width: 310px;\n'])
            return (
               (Card_stories_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function Card_stories_templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: grid;\n   grid-template-columns: repeat(3, 1fr);\n   grid-gap: 20px;\n',
            ])
            return (
               (Card_stories_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.div(Card_stories_templateObject()),
            Card_stories_CardWrapper = styled_components_browser_esm.d.div(
               Card_stories_templateObject2(),
            ),
            Card_stories_tags = ['Aplikacje', 'Strony', 'Biblioteki', 'Gry', 'Szablony'],
            Card_stories_Basic =
               ((__webpack_exports__.default = {
                  component: organisms_Card_Card,
                  title: 'Organisms/Card',
                  argTypes: {
                     title: { control: 'text' },
                     description: { control: 'text' },
                     tagsCount: { control: { type: 'range', min: 0, max: 5 } },
                     technologiesCount: { control: { type: 'range', min: 0, max: 6 } },
                  },
               }),
               function Basic(_ref) {
                  var title = _ref.title,
                     description = _ref.description,
                     tagsCount = _ref.tagsCount,
                     technologiesCount = _ref.technologiesCount
                  return Object(jsx_runtime.jsx)(Card_stories_CardWrapper, {
                     children: Object(jsx_runtime.jsx)(organisms_Card_Card, {
                        title: title,
                        image: 'https://picsum.photos/400/300',
                        description: description,
                        tags: Card_stories_tags.slice(0, tagsCount),
                        technologies: testData_technologies.a.slice(0, technologiesCount),
                     }),
                  })
               }),
            Card_stories_Cards = function Cards(_ref2) {
               var title = _ref2.title,
                  description = _ref2.description,
                  tagsCount = _ref2.tagsCount,
                  technologiesCount = _ref2.technologiesCount
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(organisms_Card_Card, {
                        title: title,
                        image: 'https://picsum.photos/400/300',
                        description: description,
                        tags: Card_stories_tags.slice(0, tagsCount),
                        technologies: testData_technologies.a.slice(0, technologiesCount),
                     }),
                     Object(jsx_runtime.jsx)(organisms_Card_Card, {
                        title: title,
                        image: 'https://picsum.photos/400/300',
                        description: description,
                        tags: Card_stories_tags.slice(0, tagsCount),
                        technologies: testData_technologies.a.slice(0, technologiesCount),
                     }),
                     Object(jsx_runtime.jsx)(organisms_Card_Card, {
                        title: title,
                        image: 'https://picsum.photos/400/300',
                        description: description,
                        tags: Card_stories_tags.slice(0, tagsCount),
                        technologies: testData_technologies.a.slice(0, technologiesCount),
                     }),
                  ],
               })
            }
         ;(Card_stories_Basic.args = {
            title: 'Przykładowy tytuł',
            description:
               'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
            tagsCount: 2,
            technologiesCount: 3,
         }),
            (Card_stories_Cards.args = {
               title: 'Przykładowy tytuł',
               description:
                  'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
               tagsCount: 2,
               technologiesCount: 3,
            }),
            (Card_stories_Basic.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        '({ title, description, tagsCount, technologiesCount }) => (\n   <CardWrapper>\n      <Card\n         title={title}\n         image="https://picsum.photos/400/300"\n         description={description}\n         tags={tags.slice(0, tagsCount)}\n         technologies={technologies.slice(0, technologiesCount)}\n      />\n   </CardWrapper>\n)',
                  },
               },
               Card_stories_Basic.parameters,
            )),
            (Card_stories_Cards.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        '({ title, description, tagsCount, technologiesCount }) => (\n   <Wrapper>\n      <Card\n         title={title}\n         image="https://picsum.photos/400/300"\n         description={description}\n         tags={tags.slice(0, tagsCount)}\n         technologies={technologies.slice(0, technologiesCount)}\n      />\n      <Card\n         title={title}\n         image="https://picsum.photos/400/300"\n         description={description}\n         tags={tags.slice(0, tagsCount)}\n         technologies={technologies.slice(0, technologiesCount)}\n      />\n      <Card\n         title={title}\n         image="https://picsum.photos/400/300"\n         description={description}\n         tags={tags.slice(0, tagsCount)}\n         technologies={technologies.slice(0, technologiesCount)}\n      />\n   </Wrapper>\n)',
                  },
               },
               Card_stories_Cards.parameters,
            )),
            (Card_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: {
                  title: { type: { name: 'string' }, required: !0, description: '' },
                  description: { type: { name: 'string' }, required: !0, description: '' },
                  tagsCount: { type: { name: 'number' }, required: !0, description: '' },
                  technologiesCount: { type: { name: 'number' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/organisms/Card/Card.stories.js'] = {
                  name: 'Basic',
                  docgenInfo: Card_stories_Basic.__docgenInfo,
                  path: 'src/components/organisms/Card/Card.stories.js',
               }),
            (Card_stories_Cards.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Cards',
               props: {
                  title: { type: { name: 'string' }, required: !0, description: '' },
                  description: { type: { name: 'string' }, required: !0, description: '' },
                  tagsCount: { type: { name: 'number' }, required: !0, description: '' },
                  technologiesCount: { type: { name: 'number' }, required: !0, description: '' },
               },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/organisms/Card/Card.stories.js'] = {
                  name: 'Cards',
                  docgenInfo: Card_stories_Cards.__docgenInfo,
                  path: 'src/components/organisms/Card/Card.stories.js',
               })
      },
      1519: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return FilterPanel_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            taggedTemplateLiteral = __webpack_require__(3),
            Dropdown = __webpack_require__(153),
            SearchInput = __webpack_require__(185),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2)),
            dropdown = __webpack_require__(140)
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   margin: 4px;\n   margin-left: auto;\n',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)(['\n   margin: 4px;\n'])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   flex-wrap: wrap;\n   justify-content: flex-end;\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   min-height: 64px;\n   border-radius: 32px;\n   box-shadow: ',
               ';\n   background: ',
               ';\n   padding: 4px;\n   display: flex;\n   flex-wrap: wrap;\n   justify-content: space-between;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.div(
               _templateObject(),
               function (_ref) {
                  return _ref.theme.shadow.soft
               },
               function (_ref2) {
                  return _ref2.theme.bgPrimary
               },
            ),
            Section = styled_components_browser_esm.d.section(_templateObject2()),
            StyledDropdown = Object(styled_components_browser_esm.d)(Dropdown.a)(
               _templateObject3(),
            ),
            StyledSearch = Object(styled_components_browser_esm.d)(SearchInput.a)(
               _templateObject4(),
            ),
            FilterPanel_FilterPanel = function FilterPanel() {
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsxs)(Section, {
                        children: [
                           Object(jsx_runtime.jsx)(StyledDropdown, {
                              options: dropdown.b,
                              label: 'Sortuj',
                              defaultvalue: 'date',
                              sort: !0,
                           }),
                           Object(jsx_runtime.jsx)(StyledDropdown, {
                              options: dropdown.a,
                              label: 'Kategoria',
                              defaultvalue: 'all',
                           }),
                           Object(jsx_runtime.jsx)(StyledDropdown, {
                              options: dropdown.c,
                              label: 'Technologia',
                              defaultvalue: 'all',
                           }),
                        ],
                     }),
                     Object(jsx_runtime.jsx)(StyledSearch, {}),
                  ],
               })
            }
         FilterPanel_FilterPanel.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'FilterPanel',
         }
         var organisms_FilterPanel_FilterPanel = FilterPanel_FilterPanel
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/organisms/FilterPanel/FilterPanel.js'] = {
               name: 'FilterPanel',
               docgenInfo: FilterPanel_FilterPanel.__docgenInfo,
               path: 'src/components/organisms/FilterPanel/FilterPanel.js',
            })
         __webpack_exports__.default = {
            component: organisms_FilterPanel_FilterPanel,
            title: 'Organisms/FilterPanel',
         }
         var FilterPanel_stories_Basic = function Basic() {
            return Object(jsx_runtime.jsx)(organisms_FilterPanel_FilterPanel, {})
         }
         ;(FilterPanel_stories_Basic.parameters = Object(objectSpread2.a)(
            { storySource: { source: '() => <FilterPanel />' } },
            FilterPanel_stories_Basic.parameters,
         )),
            (FilterPanel_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/organisms/FilterPanel/FilterPanel.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: FilterPanel_stories_Basic.__docgenInfo,
                  path: 'src/components/organisms/FilterPanel/FilterPanel.stories.js',
               })
      },
      1520: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return TechnologyStack_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            objectWithoutProperties = __webpack_require__(66),
            taggedTemplateLiteral = __webpack_require__(3),
            Heading = __webpack_require__(108),
            Icon = __webpack_require__(93),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject5() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 84px;\n   height: 104px;\n   padding: 20px 10px;\n   position: relative;\n\n   &:hover ',
               ' {\n      opacity: 1;\n      transform: translate(-50%, 0);\n   }\n',
            ])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   position: absolute;\n   bottom: -5px;\n   left: 50%;\n   color: ',
               ';\n   font-size: ',
               ';\n   will-change: transform;\n   transition: transform 0.2s ease-out, opacity 0.2s linear;\n   opacity: 0;\n   transform: translate(-50%, -16px);\n',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   display: flex;\n   justify-content: center;\n   flex-wrap: wrap;\n   margin-top: 20px;\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)(['\n   animation: ', ' 0.5s ease-out;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   from {\n      opacity: 0;\n   }\n   to {\n      opacity: 1;\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Show = Object(styled_components_browser_esm.e)(_templateObject()),
            Wrapper = styled_components_browser_esm.d.section(_templateObject2(), Show),
            IconsWrapper = styled_components_browser_esm.d.div(_templateObject3()),
            IconLabel = styled_components_browser_esm.d.span(
               _templateObject4(),
               function (_ref) {
                  return _ref.theme.fontPrimary
               },
               function (_ref2) {
                  return _ref2.theme.fontSize.xs
               },
            ),
            IconWrapper = styled_components_browser_esm.d.div(_templateObject5(), IconLabel),
            TechnologyStack_TechnologyStack = function TechnologyStack(_ref3) {
               var technologies = _ref3.technologies,
                  props = Object(objectWithoutProperties.a)(_ref3, ['technologies'])
               return Object(jsx_runtime.jsxs)(
                  Wrapper,
                  Object(objectSpread2.a)(
                     Object(objectSpread2.a)({}, props),
                     {},
                     {
                        children: [
                           Object(jsx_runtime.jsx)(Heading.a, {
                              size: 'h2',
                              children: 'Technologie na których pracuje',
                           }),
                           Object(jsx_runtime.jsx)(IconsWrapper, {
                              children:
                                 technologies &&
                                 technologies.map(function (_ref4) {
                                    var _id = _ref4._id,
                                       image = _ref4.image,
                                       name = _ref4.name
                                    return Object(jsx_runtime.jsxs)(
                                       IconWrapper,
                                       {
                                          children: [
                                             Object(jsx_runtime.jsx)(Icon.a, {
                                                src: image.path,
                                                alt: name,
                                             }),
                                             Object(jsx_runtime.jsx)(IconLabel, { children: name }),
                                          ],
                                       },
                                       _id,
                                    )
                                 }),
                           }),
                        ],
                     },
                  ),
               )
            }
         ;(TechnologyStack_TechnologyStack.defaultProps = { technologies: null }),
            (TechnologyStack_TechnologyStack.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'TechnologyStack',
               props: {
                  technologies: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: {
                        name: 'arrayOf',
                        value: {
                           name: 'shape',
                           value: {
                              _id: { name: 'string', required: !1 },
                              name: { name: 'string', required: !1 },
                              image: {
                                 name: 'shape',
                                 value: { path: { name: 'string', required: !1 } },
                                 required: !1,
                              },
                           },
                        },
                     },
                     required: !1,
                     description: '',
                  },
               },
            })
         var molecules_TechnologyStack_TechnologyStack = TechnologyStack_TechnologyStack
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
               'src/components/molecules/TechnologyStack/TechnologyStack.js'
            ] = {
               name: 'TechnologyStack',
               docgenInfo: TechnologyStack_TechnologyStack.__docgenInfo,
               path: 'src/components/molecules/TechnologyStack/TechnologyStack.js',
            })
         var testData_technologies = __webpack_require__(109),
            TechnologyStack_stories_Basic =
               ((__webpack_exports__.default = {
                  comnponent: molecules_TechnologyStack_TechnologyStack,
                  title: 'Molecules/TechnologyStack',
               }),
               function Basic() {
                  return Object(jsx_runtime.jsx)(molecules_TechnologyStack_TechnologyStack, {
                     technologies: testData_technologies.a,
                  })
               })
         ;(TechnologyStack_stories_Basic.parameters = Object(objectSpread2.a)(
            { storySource: { source: '() => <TechnologyStack technologies={technologies} />' } },
            TechnologyStack_stories_Basic.parameters,
         )),
            (TechnologyStack_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/TechnologyStack/TechnologyStack.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: TechnologyStack_stories_Basic.__docgenInfo,
                  path: 'src/components/molecules/TechnologyStack/TechnologyStack.stories.js',
               })
      },
      1521: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, 'Basic', function () {
               return ProjectHeader_stories_Basic
            })
         var objectSpread2 = __webpack_require__(9),
            jsx_runtime = __webpack_require__(1),
            taggedTemplateLiteral = __webpack_require__(3),
            Heading = __webpack_require__(108),
            Image = __webpack_require__(139),
            styled_components_browser_esm = (__webpack_require__(0), __webpack_require__(2))
         function _templateObject3() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   min-height: 64px;\n   border-radius: 32px;\n   box-shadow: ',
               ';\n   display: inline-flex;\n   align-items: center;\n   justify-content: center;\n   max-width: 100%;\n   padding: 0 32px;\n   background: ',
               ';\n   position: relative;\n   top: -32px;\n   left: 50%;\n   transform: translateX(-50%);\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 100%;\n   height: 350px;\n   box-shadow: ',
               ';\n   border-bottom-left-radius: ',
               ';\n   border-bottom-right-radius: ',
               ';\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(taggedTemplateLiteral.a)([
               '\n   width: 100%;\n   max-width: 700px;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components_browser_esm.d.header(_templateObject()),
            StyledImage = Object(styled_components_browser_esm.d)(Image.a)(
               _templateObject2(),
               function (_ref) {
                  return _ref.theme.shadow.soft
               },
               function (_ref2) {
                  return _ref2.theme.radiusMain
               },
               function (_ref3) {
                  return _ref3.theme.radiusMain
               },
            ),
            HeadingWrapper = styled_components_browser_esm.d.div(
               _templateObject3(),
               function (_ref4) {
                  return _ref4.theme.shadow.soft
               },
               function (_ref5) {
                  return _ref5.theme.bgPrimary
               },
            ),
            ProjectHeader_ProjectHeader = function ProjectHeader(_ref6) {
               var image = _ref6.image,
                  title = _ref6.title
               return Object(jsx_runtime.jsxs)(Wrapper, {
                  children: [
                     Object(jsx_runtime.jsx)(StyledImage, { src: image, alt: title }),
                     Object(jsx_runtime.jsx)(HeadingWrapper, {
                        children: Object(jsx_runtime.jsx)(Heading.a, {
                           size: 'h3',
                           children: title,
                        }),
                     }),
                  ],
               })
            }
         ;(ProjectHeader_ProjectHeader.defaultProps = { image: null, title: '' }),
            (ProjectHeader_ProjectHeader.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'ProjectHeader',
               props: {
                  image: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
                  title: {
                     defaultValue: { value: "''", computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
               },
            })
         var organisms_ProjectHeader_ProjectHeader = ProjectHeader_ProjectHeader
         'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/organisms/ProjectHeader/ProjectHeader.js'] = {
               name: 'ProjectHeader',
               docgenInfo: ProjectHeader_ProjectHeader.__docgenInfo,
               path: 'src/components/organisms/ProjectHeader/ProjectHeader.js',
            })
         __webpack_exports__.default = {
            component: organisms_ProjectHeader_ProjectHeader,
            title: 'Organisms/ProjectHeader',
            argTypes: { title: { control: 'text' } },
         }
         var ProjectHeader_stories_Basic = function Basic(_ref) {
            var title = _ref.title
            return Object(jsx_runtime.jsx)(organisms_ProjectHeader_ProjectHeader, {
               image: 'https://picsum.photos/700/350',
               title: title,
            })
         }
         ;(ProjectHeader_stories_Basic.args = { title: 'Tytuł projektu' }),
            (ProjectHeader_stories_Basic.parameters = Object(objectSpread2.a)(
               {
                  storySource: {
                     source:
                        '({ title }) => (\n   <ProjectHeader image="https://picsum.photos/700/350" title={title} />\n)',
                  },
               },
               ProjectHeader_stories_Basic.parameters,
            )),
            (ProjectHeader_stories_Basic.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'Basic',
               props: { title: { type: { name: 'string' }, required: !0, description: '' } },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/organisms/ProjectHeader/ProjectHeader.stories.js'
               ] = {
                  name: 'Basic',
                  docgenInfo: ProjectHeader_stories_Basic.__docgenInfo,
                  path: 'src/components/organisms/ProjectHeader/ProjectHeader.stories.js',
               })
      },
      153: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               66,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               552,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
               553,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
               556,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
               555,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1),
            _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
               240,
            ),
            _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
               _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_8__,
            ),
            components_atoms_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
               107,
            ),
            react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
               react__WEBPACK_IMPORTED_MODULE_10__,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2)
         function _templateObject8() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               '\n   font-size: ',
               ';\n   padding: 10px 20px;\n   cursor: pointer;\n   border: none;\n   background: transparent;\n   color: ',
               ";\n   text-align: left;\n   position: relative;\n\n   ::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: ",
               ';\n      opacity: 0;\n      transition: opacity 0.2s linear;\n      border-radius: ',
               ';\n   }\n\n   &:hover::before {\n      opacity: 1;\n   }\n',
            ])
            return (
               (_templateObject8 = function _templateObject8() {
                  return data
               }),
               data
            )
         }
         function _templateObject7() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               '\n   padding: 10px 0;\n   display: inline-flex;\n   flex-direction: column;\n   position: absolute;\n   top: 56px;\n   left: 0;\n   min-width: 200px;\n   animation: ',
               ' 0.2s ease-out;\n',
            ])
            return (
               (_templateObject7 = function _templateObject7() {
                  return data
               }),
               data
            )
         }
         function _templateObject6() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               '\n   border: none;\n   height: 48px;\n   color: ',
               ';\n   background: ',
               ';\n   border-radius: 24px;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   text-align: center;\n   font-size: ',
               ';\n   padding: 0 24px;\n   cursor: pointer;\n',
            ])
            return (
               (_templateObject6 = function _templateObject6() {
                  return data
               }),
               data
            )
         }
         function _templateObject5() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )(['\n   display: none;\n'])
            return (
               (_templateObject5 = function _templateObject5() {
                  return data
               }),
               data
            )
         }
         function _templateObject4() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               '\n   color: ',
               ' !important;\n   font-size: 16px !important;\n   transform: rotate(',
               'deg);\n',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               "\n   width: 32px;\n   height: 32px;\n   border: none;\n   border-radius: 50%;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   background-color: transparent;\n   position: relative;\n   margin-left: 4px;\n   margin-right: -8px;\n   cursor: pointer;\n\n   ::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: ",
               ';\n      opacity: 0;\n      transition: opacity 0.2s linear;\n      border-radius: 50%;\n   }\n\n   &:hover::before {\n      opacity: 1;\n   }\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )(['\n   position: relative;\n   display: inline-block;\n   user-select: none;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
            )([
               '\n   from {\n      opacity: 0;\n      transform: translateY(-20px);\n   }\n   to {\n      opacity: 1;\n      transform: translateY(0);\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Show = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__.e)(_templateObject()),
            Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__.d.div(_templateObject2()),
            IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__.d.button(
               _templateObject3(),
               function (_ref) {
                  return _ref.theme.transparent.white.soft
               },
            ),
            StyledIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__.d)(
               _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_8___default.a,
            )(
               _templateObject4(),
               function (_ref2) {
                  return _ref2.theme.fontPrimary
               },
               function (_ref3) {
                  return 'desc' === _ref3.direction ? 90 : -90
               },
            ),
            Select = styled_components__WEBPACK_IMPORTED_MODULE_11__.d.select(_templateObject5()),
            Button = styled_components__WEBPACK_IMPORTED_MODULE_11__.d.div(
               _templateObject6(),
               function (_ref4) {
                  return _ref4.theme.fontPrimary
               },
               function (_ref5) {
                  var theme = _ref5.theme
                  return _ref5.active ? theme.bgBadge : theme.bgSecondary
               },
               function (_ref6) {
                  return _ref6.theme.fontSize.s
               },
            ),
            DropdownList = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__.d)(
               components_atoms_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_9__.a,
            )(_templateObject7(), Show),
            Option = styled_components__WEBPACK_IMPORTED_MODULE_11__.d.button(
               _templateObject8(),
               function (_ref7) {
                  return _ref7.theme.fontSize.s
               },
               function (_ref8) {
                  return _ref8.theme.fontPrimary
               },
               function (_ref9) {
                  return _ref9.theme.transparent.white.soft
               },
               function (_ref10) {
                  return _ref10.theme.radiusSecondary
               },
            ),
            Dropdown = (function (_React$Component) {
               Object(
                  _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a,
               )(Dropdown, _React$Component)
               var _super = Object(
                  _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a,
               )(Dropdown)
               function Dropdown(props) {
                  var _this
                  return (
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a,
                     )(this, Dropdown),
                     ((_this = _super.call(this, props)).state = {
                        isOpen: !1,
                        value: null,
                        sortDirection: 'asc',
                     }),
                     (_this.Select = Object(react__WEBPACK_IMPORTED_MODULE_10__.createRef)()),
                     _this
                  )
               }
               return (
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a,
                  )(Dropdown, [
                     {
                        key: 'componentDidMount',
                        value: function componentDidMount() {
                           var _this$props = this.props,
                              defaultvalue = _this$props.defaultvalue,
                              options = _this$props.options
                           try {
                              var option = options.find(function (x) {
                                 return x.value === defaultvalue
                              })
                              this.setState({ value: option.display })
                           } catch (e) {
                              this.setState({ value: e.message })
                           }
                        },
                     },
                     {
                        key: 'handleFocusDropdown',
                        value: function handleFocusDropdown() {
                           this.setState({ isOpen: !0 })
                        },
                     },
                     {
                        key: 'handleBlurDropdown',
                        value: function handleBlurDropdown(e) {
                           e.currentTarget.contains(e.relatedTarget) ||
                              this.setState({ isOpen: !1 })
                        },
                     },
                     {
                        key: 'handleClickOption',
                        value: function handleClickOption(e, value) {
                           this.Select.current.value = value
                           var option = this.props.options.find(function (x) {
                              return x.value === value
                           })
                           this.setState({ value: option.display }), e.currentTarget.blur()
                        },
                     },
                     {
                        key: 'toggleSortDirection',
                        value: function toggleSortDirection() {
                           'asc' === this.state.sortDirection
                              ? this.setState({ sortDirection: 'desc' })
                              : this.setState({ sortDirection: 'asc' })
                        },
                     },
                     {
                        key: 'render',
                        value: function render() {
                           var _this2 = this,
                              _this$props2 = this.props,
                              options = _this$props2.options,
                              label = _this$props2.label,
                              sort = _this$props2.sort,
                              defaultvalue = _this$props2.defaultvalue,
                              props = Object(
                                 _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a,
                              )(_this$props2, ['options', 'label', 'sort', 'defaultvalue']),
                              _this$state = this.state,
                              value = _this$state.value,
                              isOpen = _this$state.isOpen,
                              sortDirection = _this$state.sortDirection
                           return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                              Wrapper,
                              Object(
                                 _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                              )(
                                 Object(
                                    _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                                 )(
                                    {
                                       tabIndex: '0',
                                       onBlur: function onBlur(e) {
                                          return _this2.handleBlurDropdown.call(_this2, e)
                                       },
                                       onFocus: function onFocus(e) {
                                          return _this2.handleFocusDropdown.call(_this2, e)
                                       },
                                    },
                                    props,
                                 ),
                                 {},
                                 {
                                    children: [
                                       Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                                          Select,
                                          {
                                             ref: this.Select,
                                             defaultValue: defaultvalue,
                                             children:
                                                options &&
                                                options.map(function (_ref11) {
                                                   var _id = _ref11._id,
                                                      optValue = _ref11.value,
                                                      displayList = _ref11.displayList
                                                   return Object(
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx,
                                                   )(
                                                      'option',
                                                      { value: optValue, children: displayList },
                                                      _id,
                                                   )
                                                }),
                                          },
                                       ),
                                       Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                                          Button,
                                          {
                                             active: isOpen,
                                             children: [
                                                label,
                                                ': ',
                                                value && value,
                                                sort &&
                                                   Object(
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx,
                                                   )(IconWrapper, {
                                                      onClick: function onClick() {
                                                         return _this2.toggleSortDirection()
                                                      },
                                                      children: Object(
                                                         react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx,
                                                      )(StyledIcon, { direction: sortDirection }),
                                                   }),
                                             ],
                                          },
                                       ),
                                       isOpen &&
                                          Object(
                                             react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx,
                                          )(DropdownList, {
                                             children: options.map(function (_ref12) {
                                                var _id = _ref12._id,
                                                   optValue = _ref12.value,
                                                   displayList = _ref12.displayList
                                                return Object(
                                                   react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx,
                                                )(
                                                   Option,
                                                   {
                                                      value: optValue,
                                                      selected: optValue === value,
                                                      onClick: function onClick(e) {
                                                         return _this2.handleClickOption(
                                                            e,
                                                            optValue,
                                                         )
                                                      },
                                                      children: displayList,
                                                   },
                                                   _id,
                                                )
                                             }),
                                          }),
                                    ],
                                 },
                              ),
                           )
                        },
                     },
                  ]),
                  Dropdown
               )
            })(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)
         ;(Dropdown.defaultProps = { options: null, sort: !1 }),
            (Dropdown.__docgenInfo = {
               description: '',
               methods: [
                  {
                     name: 'handleFocusDropdown',
                     docblock: null,
                     modifiers: [],
                     params: [],
                     returns: null,
                  },
                  {
                     name: 'handleBlurDropdown',
                     docblock: null,
                     modifiers: [],
                     params: [{ name: 'e', type: null }],
                     returns: null,
                  },
                  {
                     name: 'handleClickOption',
                     docblock: null,
                     modifiers: [],
                     params: [
                        { name: 'e', type: null },
                        { name: 'value', type: null },
                     ],
                     returns: null,
                  },
                  {
                     name: 'toggleSortDirection',
                     docblock: null,
                     modifiers: [],
                     params: [],
                     returns: null,
                  },
               ],
               displayName: 'Dropdown',
               props: {
                  options: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: {
                        name: 'arrayOf',
                        value: {
                           name: 'shape',
                           value: {
                              _id: { name: 'string', required: !1 },
                              value: { name: 'string', required: !1 },
                              display: { name: 'string', required: !1 },
                              displayList: { name: 'custom', raw: 'PropTypes', required: !1 },
                           },
                        },
                     },
                     required: !1,
                     description: '',
                  },
                  sort: {
                     defaultValue: { value: 'false', computed: !1 },
                     type: { name: 'bool' },
                     required: !1,
                     description: '',
                  },
                  label: { type: { name: 'string' }, required: !0, description: '' },
                  defaultvalue: { type: { name: 'string' }, required: !0, description: '' },
               },
            }),
            (__webpack_exports__.a = Dropdown),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/Dropdown/Dropdown.js'] = {
                  name: 'Dropdown',
                  docgenInfo: Dropdown.__docgenInfo,
                  path: 'src/components/molecules/Dropdown/Dropdown.js',
               })
      },
      182: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            3,
         )
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
               '\n   display: inline-block;\n   height: 20px;\n   border-radius: 10px;\n   font-size: ',
               ';\n   background: ',
               ';\n   color: ',
               ';\n   text-align: center;\n   line-height: 18px;\n   padding: 1px 10px;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Badge = __webpack_require__(2).d.span(
            _templateObject(),
            function (_ref) {
               return _ref.theme.fontSize.xs
            },
            function (_ref2) {
               return _ref2.theme.bgBadge
            },
            function (_ref3) {
               return _ref3.theme.fontSecondary
            },
         )
         __webpack_exports__.a = Badge
      },
      183: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               3,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2)
         function _templateObject4() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
               '\n         display: -webkit-box;\n         -webkit-line-clamp: ',
               ';\n         -webkit-box-orient: vertical;\n         overflow: hidden;\n         height: ',
               'em;\n      ',
            ])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )(['\n         animation: ', ' 0.5s ease-out;\n      '])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
               '\n   margin: 0;\n   font-size: ',
               ';\n   text-align: center;\n   line-height: ',
               ';\n   ',
               '\n   ',
               '\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )(['\n   from {\n      opacity: 0;\n   }\n   to {\n      opacity: 1;\n   }\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Show = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_templateObject()),
            Text = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.p(
               _templateObject2(),
               function (_ref) {
                  var small = _ref.small,
                     theme = _ref.theme
                  return small ? theme.fontSize.s : theme.fontSize.m
               },
               function (_ref2) {
                  return _ref2.theme.lineMain
               },
               function (_ref3) {
                  return (
                     !_ref3.small &&
                     Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(
                        _templateObject3(),
                        Show,
                     )
                  )
               },
               function (_ref4) {
                  var lineclamp = _ref4.lineclamp,
                     theme = _ref4.theme
                  return (
                     lineclamp &&
                     Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(
                        _templateObject4(),
                        lineclamp,
                        theme.lineMainNumber * lineclamp,
                     )
                  )
               },
            )
         __webpack_exports__.a = Text
      },
      184: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               66,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
            _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
               240,
            ),
            _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
               _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_4__,
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_6__ =
               (__webpack_require__(0), __webpack_require__(548)),
            styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2)
         function _templateObject3() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )(['\n         transform: rotate(180deg);\n      '])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )(['\n   color: ', ' !important;\n   font-size: 32px !important;\n   ', '\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   width: 64px;\n   height: 64px;\n   background: ',
               ' !important;\n   border-radius: 32px;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   box-shadow: ',
               ';\n   color: ',
               ";\n   border: none;\n   cursor: pointer;\n   position: relative;\n\n   ::before {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      background-color: ",
               ';\n      will-change: transform;\n      opacity: 0;\n      top: 0;\n      left: 0;\n      transition: opacity 0.5s linear, transform 0.5s ease-out;\n      transform: scale(1);\n   }\n\n   &:active::before {\n      opacity: 1;\n      transition: opacity 0s linear, transform 0s ease-out;\n      transform: scale(0);\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.d)(
               react_router_dom__WEBPACK_IMPORTED_MODULE_6__.a,
            )(
               _templateObject(),
               function (_ref) {
                  return _ref.theme.bgPrimary
               },
               function (_ref2) {
                  return _ref2.theme.shadow.hard
               },
               function (_ref3) {
                  return _ref3.theme.fontPrimary
               },
               function (_ref4) {
                  return _ref4.theme.transparent.white.mid
               },
            ),
            StyledIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.d)(
               _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_4___default.a,
            )(
               _templateObject2(),
               function (_ref5) {
                  return _ref5.theme.fontPrimary
               },
               function (_ref6) {
                  return (
                     'true' === _ref6.prev &&
                     Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.c)(_templateObject3())
                  )
               },
            ),
            ArrowButton = function ArrowButton(_ref7) {
               var prev = _ref7.prev,
                  to = _ref7.to,
                  props = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a,
                  )(_ref7, ['prev', 'to'])
               return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  StyledButton,
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                  )(
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                     )({ to: to }, props),
                     {},
                     {
                        children: Object(
                           react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                        )(StyledIcon, { prev: prev ? 'true' : null }),
                     },
                  ),
               )
            }
         ;(ArrowButton.defaultProps = { prev: !1, to: null }),
            (ArrowButton.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'ArrowButton',
               props: {
                  prev: {
                     defaultValue: { value: 'false', computed: !1 },
                     type: { name: 'bool' },
                     required: !1,
                     description: '',
                  },
                  to: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: { name: 'string' },
                     required: !1,
                     description: '',
                  },
               },
            }),
            (__webpack_exports__.a = ArrowButton),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/ArrowButton/ArrowButton.js'] = {
                  name: 'ArrowButton',
                  docgenInfo: ArrowButton.__docgenInfo,
                  path: 'src/components/molecules/ArrowButton/ArrowButton.js',
               })
      },
      185: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               242,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
            _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(554),
            _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
               _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__,
            ),
            react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
            styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2)
         function _templateObject4() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )(['\n   font-size: 24px !important;\n   color: ', ' !important;\n'])
            return (
               (_templateObject4 = function _templateObject4() {
                  return data
               }),
               data
            )
         }
         function _templateObject3() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   width: 48px;\n   height: 48px;\n   position: absolute;\n   right: 0;\n   top: 0;\n   border-radius: 50%;\n   background: ',
               ';\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   pointer-events: none;\n',
            ])
            return (
               (_templateObject3 = function _templateObject3() {
                  return data
               }),
               data
            )
         }
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   width: 200px;\n   height: 48px;\n   will-change: transform;\n   border: none;\n   border-radius: 24px;\n   background: ',
               ';\n   color: ',
               ';\n   font-size: ',
               ';\n   padding-left: 24px;\n   padding-right: 28px;\n   transition: transform 0.3s ease-out;\n   transform: translateX(',
               'px);\n   outline: none;\n\n   :focus {\n      transform: translateX(0px);\n   }\n\n   ::placeholder {\n      color: ',
               ';\n   }\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   width: 200px;\n   height: 48px;\n   position: relative;\n   overflow: hidden;\n   border-radius: 24px;\n   display: inline-block;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div(_templateObject()),
            Input = styled_components__WEBPACK_IMPORTED_MODULE_6__.d.input(
               _templateObject2(),
               function (_ref) {
                  return _ref.theme.bgSecondary
               },
               function (_ref2) {
                  return _ref2.theme.fontPrimary
               },
               function (_ref3) {
                  return _ref3.theme.fontSize.s
               },
               function (_ref4) {
                  return _ref4.active ? 0 : 152
               },
               function (_ref5) {
                  return _ref5.theme.fontSecondary
               },
            ),
            IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div(
               _templateObject3(),
               function (_ref6) {
                  return _ref6.theme.bgSecondary
               },
            ),
            StyledIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.d)(
               _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default.a,
            )(_templateObject4(), function (_ref7) {
               return _ref7.theme.fontPrimary
            }),
            SearchInput = function SearchInput(_ref8) {
               var props = Object.assign({}, _ref8),
                  _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
                  _useState2 = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a,
                  )(_useState, 2),
                  value = _useState2[0],
                  setValue = _useState2[1]
               return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                  Wrapper,
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                  )(
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                     )({}, props),
                     {},
                     {
                        children: [
                           Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Input, {
                              type: 'search',
                              active: '' !== value,
                              placeholder: 'Szukaj...',
                              onChange: function onChange(e) {
                                 return setValue(e.target.value)
                              },
                           }),
                           Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconWrapper, {
                              children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                                 StyledIcon,
                                 {},
                              ),
                           }),
                        ],
                     },
                  ),
               )
            }
         ;(SearchInput.__docgenInfo = { description: '', methods: [], displayName: 'SearchInput' }),
            (__webpack_exports__.a = SearchInput),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES['src/components/molecules/SearchInput/SearchInput.js'] = {
                  name: 'SearchInput',
                  docgenInfo: SearchInput.__docgenInfo,
                  path: 'src/components/molecules/SearchInput/SearchInput.js',
               })
      },
      186: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               9,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
               66,
            ),
            _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
               3,
            ),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
            components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93),
            styled_components__WEBPACK_IMPORTED_MODULE_6__ =
               (__webpack_require__(0), __webpack_require__(2))
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )(['\n   flex-shrink: 0;\n   margin: 0 8px;\n'])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a,
            )([
               '\n   display: flex;\n   overflow: hidden;\n   background: ',
               ';\n   border-bottom-left-radius: ',
               ';\n   border-bottom-right-radius: ',
               ';\n   padding: 16px 8px;\n   height: 64px;\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div(
               _templateObject(),
               function (_ref) {
                  return _ref.theme.bgSecondary
               },
               function (_ref2) {
                  return _ref2.theme.radiusMain
               },
               function (_ref3) {
                  return _ref3.theme.radiusMain
               },
            ),
            StyledIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.d)(
               components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.a,
            )(_templateObject2()),
            TechnologyStackSmall = function TechnologyStackSmall(_ref4) {
               var technologies = _ref4.technologies,
                  props = Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a,
                  )(_ref4, ['technologies'])
               return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  Wrapper,
                  Object(
                     _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                  )(
                     Object(
                        _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a,
                     )({}, props),
                     {},
                     {
                        children:
                           technologies &&
                           technologies.map(function (_ref5) {
                              var _id = _ref5._id,
                                 image = _ref5.image,
                                 name = _ref5.name
                              return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                                 StyledIcon,
                                 { src: image.path, alt: name, title: name, small: !0 },
                                 _id,
                              )
                           }),
                     },
                  ),
               )
            }
         ;(TechnologyStackSmall.defaultProps = { technologies: null }),
            (TechnologyStackSmall.__docgenInfo = {
               description: '',
               methods: [],
               displayName: 'TechnologyStackSmall',
               props: {
                  technologies: {
                     defaultValue: { value: 'null', computed: !1 },
                     type: {
                        name: 'arrayOf',
                        value: {
                           name: 'shape',
                           value: {
                              _id: { name: 'string', required: !1 },
                              name: { name: 'string', required: !1 },
                              image: {
                                 name: 'shape',
                                 value: { path: { name: 'string', required: !1 } },
                                 required: !1,
                              },
                           },
                        },
                     },
                     required: !1,
                     description: '',
                  },
               },
            }),
            (__webpack_exports__.a = TechnologyStackSmall),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
               (STORYBOOK_REACT_CLASSES[
                  'src/components/molecules/TechnologyStackSmall/TechnologyStackSmall.js'
               ] = {
                  name: 'TechnologyStackSmall',
                  docgenInfo: TechnologyStackSmall.__docgenInfo,
                  path: 'src/components/molecules/TechnologyStackSmall/TechnologyStackSmall.js',
               })
      },
      558: function (module, exports, __webpack_require__) {
         __webpack_require__(559),
            __webpack_require__(711),
            __webpack_require__(712),
            __webpack_require__(874),
            __webpack_require__(1429),
            __webpack_require__(1461),
            __webpack_require__(1469),
            __webpack_require__(1481),
            __webpack_require__(1483),
            __webpack_require__(1485),
            (module.exports = __webpack_require__(1487))
      },
      58: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
               3,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2)
         function _templateObject2() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
               '\n   width: ',
               ';\n   height: ',
               ';\n   max-width: 700px;\n   background-color: ',
               ';\n   background-image: ',
               ';\n   background-position: 0, 0;\n   background-size: 800px 100%;\n   background-repeat: no-repeat;\n   animation: ',
               ' 1s ease-in-out infinite;\n',
            ])
            return (
               (_templateObject2 = function _templateObject2() {
                  return data
               }),
               data
            )
         }
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
               '\n   from {\n      background-position: -800px, 0;\n   }\n   to {\n      background-position: 800px, 0;\n   }\n',
            ])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Preload = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_templateObject()),
            PreloadImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(
               _templateObject2(),
               function (_ref) {
                  return _ref.width || '100%'
               },
               function (_ref2) {
                  return _ref2.height || 'auto'
               },
               function (_ref3) {
                  return _ref3.theme.bgBadge
               },
               function (_ref4) {
                  return _ref4.theme.gradient.preload
               },
               Preload,
            )
         __webpack_exports__.a = PreloadImage
      },
      623: function (module, exports) {},
      712: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         __webpack_require__.r(__webpack_exports__)
         __webpack_require__(229)
      },
      93: function (module, __webpack_exports__, __webpack_require__) {
         'use strict'
         var _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            3,
         )
         function _templateObject() {
            var data = Object(
               _mnt_c_Users_Marci_projects_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )(['\n   width: ', 'px;\n   height: ', 'px;\n   object-fit: contain;\n'])
            return (
               (_templateObject = function _templateObject() {
                  return data
               }),
               data
            )
         }
         var Icon = __webpack_require__(2).d.img(
            _templateObject(),
            function (_ref) {
               return _ref.small ? 32 : 64
            },
            function (_ref2) {
               return _ref2.small ? 32 : 64
            },
         )
         __webpack_exports__.a = Icon
      },
   },
   [[558, 1, 2]],
])
//# sourceMappingURL=main.605ce612787917334b19.bundle.js.map
