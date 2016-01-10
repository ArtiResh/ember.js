/*globals Ember:true,ENV,EmberENV */

/**
@module ember
@submodule ember-metal
*/

/**
 Это пространчтво имен содержит в себе все Ember методы и функции.
 Будущие версии Ember могут перезаписывать это пространство имен,
 и следовательно следует избегать добавления новых свойств

 Вы также можете использовать сокращенное "Em" вместо "Ember"

 Ядро Ember это Ember-Runtime - это набор функции, которые предоставляют
 кроссплатформенную совместимость и наблюдение за свойствами объекта.
 Ember-Runtime невелика и направлена на выполнение, так что вы можете использовать
 сторонние кроссплатворменные библиотеки, такие как jQuery. Более детально
  [Ember-Runtime](http://emberjs.com/api/modules/ember-runtime.html).

  @class Ember
  @static
  @version VERSION_STRING_PLACEHOLDER
  @public
*/

if ('undefined' === typeof Ember) {
  // Создаем объект ядра. Сделаем это действие, как экземпляр объекта Ember.Namespace, так что
  // объекты назначенные от него будут приведены к верному сторовому состоянию
  Ember = {};
}

// Дефолтный вводные и выходные данные, и наблюдаемые в глобалных объектах
var global = mainContext || {}; // jshint ignore:line
Ember.imports = Ember.imports || global;
Ember.lookup  = Ember.lookup  || global;
var emExports   = Ember.exports = Ember.exports || global;

// псевдонимы необходимые для сохнранения сокращенной формы от глобального контекста
emExports.Em = emExports.Ember = Ember;

// Проверить есть ли в установленной переменной Ember значения по умолчанию или нет

Ember.isNamespace = true;

Ember.toString = function() { return 'Ember'; };

// The debug functions are exported to globals with `require` to
// prevent babel-plugin-filter-imports from removing them.
let debugModule = Ember.__loader.require('ember-metal/debug');
Ember.assert = debugModule.assert;
Ember.warn = debugModule.warn;
Ember.debug = debugModule.debug;
Ember.deprecate = debugModule.deprecate;
Ember.deprecateFunc = debugModule.deprecateFunc;
Ember.runInDebug = debugModule.runInDebug;

/**
  The semantic version.

  @property VERSION
  @type String
  @default 'VERSION_STRING_PLACEHOLDER'
  @static
  @public
*/
Ember.VERSION = 'VERSION_STRING_PLACEHOLDER';

/**
  The hash of environment variables used to control various configuration
  settings. To specify your own or override default settings, add the
  desired properties to a global hash named `EmberENV` (or `ENV` for
  backwards compatibility with earlier versions of Ember). The `EmberENV`
  hash must be created before loading Ember.

  @property ENV
  @type Object
  @public
*/

if (Ember.ENV) {
  // do nothing if Ember.ENV is already setup
  Ember.assert('Ember.ENV should be an object.', 'object' !== typeof Ember.ENV);
} else if ('undefined' !== typeof EmberENV) {
  Ember.ENV = EmberENV;
} else if ('undefined' !== typeof ENV) {
  Ember.ENV = ENV;
} else {
  Ember.ENV = {};
}

// ENABLE_ALL_FEATURES was documented, but you can't actually enable non optional features.
if (Ember.ENV.ENABLE_ALL_FEATURES) {
  Ember.ENV.ENABLE_OPTIONAL_FEATURES = Ember.ENV.ENABLE_ALL_FEATURES;
}

Ember.config = Ember.config || {};

// ..........................................................
// BOOTSTRAP
//

/**
  Determines whether Ember should add to `Array`, `Function`, and `String`
  native object prototypes, a few extra methods in order to provide a more
  friendly API.

  We generally recommend leaving this option set to true however, if you need
  to turn it off, you can add the configuration property
  `EXTEND_PROTOTYPES` to `EmberENV` and set it to `false`.

  Note, when disabled (the default configuration for Ember Addons), you will
  instead have to access all methods and functions from the Ember
  namespace.

  @property EXTEND_PROTOTYPES
  @type Boolean
  @default true
  @for Ember
  @public
*/
Ember.EXTEND_PROTOTYPES = Ember.ENV.EXTEND_PROTOTYPES;

if (typeof Ember.EXTEND_PROTOTYPES === 'undefined') {
  Ember.EXTEND_PROTOTYPES = true;
}

/**
  The `LOG_STACKTRACE_ON_DEPRECATION` property, when true, tells Ember to log
  a full stack trace during deprecation warnings.

  @property LOG_STACKTRACE_ON_DEPRECATION
  @type Boolean
  @default true
  @public
*/
Ember.LOG_STACKTRACE_ON_DEPRECATION = (Ember.ENV.LOG_STACKTRACE_ON_DEPRECATION !== false);

/**
  The `LOG_VERSION` property, when true, tells Ember to log versions of all
  dependent libraries in use.

  @property LOG_VERSION
  @type Boolean
  @default true
  @public
*/
Ember.LOG_VERSION = (Ember.ENV.LOG_VERSION === false) ? false : true;

/**
  An empty function useful for some operations. Always returns `this`.

  @method K
  @return {Object}
  @public
*/
function K() { return this; }
export { K };
Ember.K = K;
//TODO: ES6 GLOBAL TODO

export default Ember;
