<template>
    <div>
        <div class="mb-3 aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden">
            <iframe v-if="src" :src="'//www.youtube.com/embed/' + getId(src)" frameborder="0" allowfullscreen></iframe>
        </div>
        <WYSIWYG>
            <p><slot></slot></p>
        </WYSIWYG>
    </div>
</template>
<script>
    export default {
        props: ["src"],
        methods: {
            getId: (url) => {
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = url.match(regExp);

                return (match && match[2].length === 11)
                    ? match[2]
                    : null;
            }
        }
    }
</script>