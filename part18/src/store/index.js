import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let machines = {
    last_serviced: 'Aug 2020',
    condition: 'working'
}

export default new Vuex.Store({
    state: {
        machineName: 'bender',
        supply: 5,
        isRestocking: false,
        isDispensing: false,
        isCheckingMachine: false,
    },
    actions: {
        fetchFromInventory() {
            //
        },
        dispense({commit}) {
            commit('isDispensing', true)
            setTimeout(() => {
                commit('dispense')
                commit('isDispensing', false)
            }, 3000)
        },
        checkMachineState({state, commit}) {
            commit('isCheckingMachine', true)
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('isCheckingMachine', false)
                    resolve(machines[state.machineName])
                }, 3000)
            })
        },
    },
    getters: {},
    mutations: {
        isRestocking(state, payload) {
            state.isRestocking = payload
        },
        isDispensing(state, payload) {
            state.isCheckingMachine = payload
        },
        dispense(state) {
            state.supply--
        },
        stockItems(state) {
            state.supply = 40
        }
    }
})
