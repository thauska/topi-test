import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Header from '@/components/Header'
import List from '@/components/List'
import ButtonsGroup from '@/components/ButtonsGroup'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Home)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    // arrange
    const wrapper = shallowMount(Home)
    const listRepos = wrapper.find(List)
    const groupButtons = wrapper.find(ButtonsGroup)

    // assert
    expect(listRepos.exists()).toBe(true)
    expect(groupButtons.exists()).toBe(true)
  })
})
