<template>
    <div>
        <van-icon class="star" name="star"/>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <van-cell-group>
                    <validation-provider rules="required|mobile" v-slot="{errors}" name="手机号码">
                        <van-field
                                required
                                v-model="phone"
                                label="手机号"
                                placeholder="请输入手机号"
                                :error-message="errors[0]"
                        />
                    </validation-provider>
                    <validation-provider rules="required|min:6" v-slot="{errors}" name="密码">
                        <van-field
                                type="password"
                                required
                                v-model="pass"
                                label="密码"
                                placeholder="请输入密码"
                                :error-message="errors[0]"
                        />
                    </validation-provider>
                </van-cell-group>
                <van-button class="van-button--primary" block type="submit">登录</van-button>
                <van-button block plain  type="primary">忘记密码</van-button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from 'vee-validate'

    export default {
        name: "Me",
        components: {
            ValidationObserver,
            ValidationProvider,
        },
        data: () => ({
            pass: '',
            phone: '',
        }),
        methods: {
            onSubmit() {
                alert('Form has been submitted!');
            }
        },
    }
</script>

<style scoped>
    .star {
        font-size: 80px;
        margin: 80px;
        display: block;
        text-align: center;
        color: orange;
    }

    .van-button--primary {
        width: calc(100% - 20px);
        margin: 10px auto;
    }
</style>