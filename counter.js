/**
  @toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('Firestitch.angular-counter', []).directive('fsCounter', [ function () {

    return {
        restrict: "A",
        scope: {
            value: "=value"
        },
        template: "<div class=\"fs-counter input-group\" ng-class=\"addclass\" ng-style=\"width\"><span class=\"input-group-btn\" ng-click=\"minus()\"><button class=\"btn btn-default\"><span class=\"glyphicon glyphicon-minus\"></span></button></span><input type=\"text\" class=\"form-control text-center\" ng-model=\"value\" ng-change=\"changed()\" ng-readonly=\"readonly\"><span class=\"input-group-btn\" ng-click=\"plus()\"><button class=\"btn btn-default\"><span class=\"glyphicon glyphicon-plus\"></span></button></span></div>",
        replace: true,
        link: function(scope, element, attributes) {
            var min = (angular.isUndefined(attributes.min) ? null : parseInt(attributes.min)),
                max = (angular.isUndefined(attributes.max) ? null : parseInt(attributes.max)),
                step = (angular.isUndefined(attributes.step) || parseInt(attributes.step) === 0 ? 1 : parseInt(attributes.step)),
                setValue;

            /**
             * Confirm the value attribute exists on the element
             */
            if (angular.isUndefined(scope.value)) {
                throw "Missing the value attribute on the counter directive.";
            }

            /**
             * Set some scope wide properties
             */
            scope.readonly = (angular.isUndefined(attributes.editable) ? true : false);
            scope.addclass = (angular.isUndefined(attributes.addclass) ? null : attributes.addclass);
            scope.width = (angular.isUndefined(attributes.width) ? {} : {width:attributes.width});

            /**
             * Sets the value as an integer.
             */
            setValue = function(val) {
                var val = parseInt(val);
                if ((!min && !max) || (min && max && val >= min && val <= max)) {
                    return val;
                }
                val = min && min > val ? min : max && max < val ? max : val;
                return val;
            };
            scope.value = setValue(scope.value);

            /**
             * Decrement the value and make sure we stay within the limits, if defined.
             */
            scope.minus = function() {
                if (min && (scope.value <= min || scope.value - step <= min) || min === 0 && scope.value < 1) {
                    scope.value = setValue(min);
                    return;
                }
                scope.value = setValue(scope.value - step);
            };

            /**
             * Increment the value and make sure we stay within the limits, if defined.
             */
            scope.plus = function() {
                if (max && (scope.value >= max || scope.value + step >= max)) {
                    scope.value = setValue(max);
                    return;
                }
                scope.value = setValue(scope.value + step);
            };

            /**
              This is only triggered when the field is manually edited by the user.
              Where we can perform some validation and make sure that they enter the
              correct values from within the restrictions.
              */
            scope.changed = function() {
                if (!scope.value) {
                    scope.value = setValue(0);
                }
                if (/[0-9]/.test(scope.value)) {
                    scope.value = setValue(scope.value);
                } else {
                    scope.value = setValue(scope.min);
                }
                if (min && (scope.value <= min || scope.value - step <= min)) {
                    scope.value = setValue(min);
                    return;
                }
                if (max && (scope.value >= max || scope.value + step >= max)) {
                    scope.value = setValue(max);
                    return;
                }
                scope.value =  setValue(scope.value);
            };
        }
    };
}]);
