<template>
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <TheCard nospacer="true">
                <TheImage class="rounded-xl w-full mb-3 md:mb-4" :asset="donate.banner" />
                <div class="sm:p-10 p-6 cf-card-content">
                    <WYSIWYG :content="donate.description"></WYSIWYG>
                    <PillButton w="w-80" :href="donate.donate_link">Donate</PillButton>
                </div>
            </TheCard>
        </div>
        <div>
            <TheCard>
                <WYSIWYG :content="donate.policy"></WYSIWYG>
            </TheCard>
        </div>
    </div>
</template>

<script>
    export default {
        async fetch() {
            this.donate = await this.$api('Donate')
        },
        data: () => ({
            donate: {}
        }),
        head() {
            return {
                title: 'Donate - CancerFIT'
            }
        }
    }
</script>