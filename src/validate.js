import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_CN';
Object.keys(rules).forEach(rule => {
    //导入内置规则
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
    //自定义规则
    extend('mobile', {
        message: "{_field_}不是一个有效的手机号码",
        validate: value => {
            return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
        }
    });
});