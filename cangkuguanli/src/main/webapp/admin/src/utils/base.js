const base = {
    get() {
        return {
            url : "http://localhost:8080/cangkuguanli/",
            name: "cangkuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cangkuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "敏捷工贸公司销售管理系统"
        } 
    }
}
export default base
