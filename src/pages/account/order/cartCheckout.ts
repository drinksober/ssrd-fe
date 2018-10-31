import { Component, Provide, Vue } from "vue-property-decorator";
import { System, ProjectCreate as Project, Profile } from "src/apis";
//结算购物车页面

@Component
export default class CartSettleViewe extends Vue {
    @Provide() index = 0; // 决定显示哪个system的form
    @Provide() Project = Project;
    @Provide() Profile = Profile;

    public submit() {}
    public cancel() {}
}
