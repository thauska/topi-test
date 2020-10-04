<template>
    <div>
        <Header />
        <div class="slds-m-around_xx-large slds-p-horizontal_xx-large">
            <ButtonsGroup />
            <List />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import List from '@/components/List';
import ButtonsGroup from '@/components/ButtonsGroup';
export default {
    name: 'HomePage',
    components: {
        Header,
        List,
        ButtonsGroup
    }
}
</script>