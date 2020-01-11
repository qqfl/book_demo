<template>
    <div>
        <!--<validation-provider class="vp" rules="email|required" v-slot="{errors}" name="邮箱地址">
            <label>
                <input type="text" v-model="email" name="email" placeholder="请输入邮箱地址">
                <span style="color: #ee0a24;">{{errors[0]}}</span>
            </label>
        </validation-provider>
        <br>
        <validation-provider class="vp" rules="mobile|required" v-slot="{errors}" name="手机号码">
            <label>
                <input type="text" v-model="phone" name="email" placeholder="请输入手机号码">
                <span style="color: #ee0a24;">{{errors[0]}}</span>
            </label>
        </validation-provider>
        <br>-->
        <van-cell-group>
            <validation-provider rules="email|required" v-slot="{errors}" name="邮箱地址">
                <van-field
                        required
                        v-model="email"
                        label="邮箱地址"
                        placeholder="请输入邮箱地址"
                        :error-message="errors[0]"
                />
            </validation-provider>
            <validation-provider rules="mobile|required" v-slot="{errors}" name="手机号码">
                <van-field
                        required
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                        :error-message="errors[0]"
                />
            </validation-provider>
        </van-cell-group>
    </div>
</template>

<script>
    import {ValidationProvider} from 'vee-validate';
    export default {
        name: "Me",
        components:{
            ValidationProvider,
        },
        data:()=>({
            email:'',
            phone:'',
        }),
    }
</script>

<style scoped>
    .vp{padding-bottom: 30px;display: block;position: relative;}
    .vp span{display: block;position: absolute;}
</style>