export default{
    'template':`
        <button :class="
        {
        ' border rounded px-5 py-5 disabled:cursor-not-allowed': true,
        'bg-gray-200 hover:bg-gray-400': type === 'muted',
        'bg-blue-600 hover:bg-gray-700': type === 'primary',
        'bg-purple-200 hover:bg-gray-400': type === 'secondary',
        'is-loading': processing
        }
        " :disabled="processing">
        <slot></slot>    
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    // data(){
    //     return {
    //         processing: true
    //     }
    // },
}