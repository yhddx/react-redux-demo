/**
 * 这是action的构建函数
 */

export const sendAction = () => {
    return {
        type: 'send_type',
        value: '我是一个action'
    }
}