'use strict';

var hasOwn = {}.hasOwnProperty;

module.exports = {
   /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend: function(sub) {
    var Super = this;
    var Constructor = hasOwn.call(sub, 'constructor') ? sub.constructor : function() {
      Super.apply(this, arguments);
    };

    global.Object.assign(Constructor, Super);
    Constructor.prototype = global.Object.create(Super.prototype);
    global.Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

    /**
   * Allow for special capitalization cases (such as OAuth)
   */
  pascalToCamelCase: function(name) {
    if (name === 'OAuth') {
      return 'oauth';
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  },
}