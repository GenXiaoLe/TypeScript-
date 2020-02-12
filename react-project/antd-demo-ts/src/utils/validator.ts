import { message } from 'antd';

export enum RegFormat {
    mobile = '^1[0-9]\d{9}$',
    emial = '',
}

export interface IRules {
    function: () => boolean;
}

const VALIDATOR = class Validator {
    public static ValidatorStrategys: typeof ValidatorStrategys;

    public rules: IRules[] = [];

    public push = (data: IRules[]) => {
        this.rules.push(...data);
    }

    public start = (): boolean => {
        return this.rules.every((item: IRules) => item.function());
    }
}

class ValidatorStrategys {
    public isEmpty = (target: string, errMsg: string = '必填项不能为空'): boolean => {
        return this.validatorReturn(target === '', errMsg);
    }
    
    public minLength = (target: any[], errMsg: string = '必填项不能为空', length: number = 1): boolean => {
        return this.validatorReturn(target.length < length, errMsg);
    }

    public regFormat = (target: string,  type: RegFormat = RegFormat.mobile, errMsg: string = '请填入符合规则的内容'): boolean => {
        return this.validatorReturn(!RegExp(type, target), errMsg);
    }

    public someDetail = (target: any[], judgeCondition: (data: any) => boolean, errMsg: string = '必填项不能为空'): boolean => {
        return this.validatorReturn(target.every((item: any) => judgeCondition(item)), errMsg);
    }

    private validatorReturn = (isTrue: boolean, errMsg: string): boolean => {
        if (isTrue) {
            message.warning(errMsg, 5);
        }
        return isTrue;
    }
}

VALIDATOR.ValidatorStrategys = ValidatorStrategys;

export default VALIDATOR;
