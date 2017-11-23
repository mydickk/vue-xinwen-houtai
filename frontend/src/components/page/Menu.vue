<template>
  <div>
    <el-tree
      :data="sidebar"
      :props="defaultProps"
      node-key="index"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>

    <el-dialog :title="editorType.type==='add'?'添加菜单':`修改菜单《${editorType.title}》`" :visible.sync="dialogFormVisible">
      <el-form :model="activeMenu">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="activeMenu.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="路由" :label-width="formLabelWidth">
          <el-input v-model="activeMenu.index" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图标" :label-width="formLabelWidth">
          <el-input v-model="activeMenu.icon" auto-complete="off" :disabled="editorType.haveRouter==0"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmChg">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

  let id = 1000;
  export default {
    data () {
      return {
        defaultProps: {
          children: 'subs',
          label: 'title',
          id: 'index'
        },
        dialogFormVisible: false,
        activeMenu: {},
        editorType: {},
        formLabelWidth: '120px'
      };
    },

    filters: {
      filterSidebar: function (sidebarData) {
        sidebarData.forEach(function (elem, index) {
          if (elem.subs) {
            elem.subs.forEach(function (e, i) {
              e._id = i;
            });
          };
        });
        return sidebarData;
      }
    },

    computed: {
      ...mapState({
        sidebar: state => state.sidebar
      }),
      ...mapGetters([
        'chgSidebar',
        'getUserList'
      ])
    },

    methods: {
      ...mapMutations([
        'setSidebar',
        'setUserList'
      ]),

      ...mapActions([
        'fetchSideBar'
      ]),

      append (data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove (node, data) {
        this.$confirm(`确认要删除《${data.title}》？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const parent = node.parent;
          const children = parent.data.subs || parent.data;
          const index = children.findIndex(d => d.index === data.index);
          children.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {});
      },

      chgMenu (type, node, data) {
        this.editorType.type = type;
        this.editorType.title = data.title;
        this.editorType.haveRouter = data.subs ? 1 : 0;
        this.editorType.data = data;
        this.activeMenu = {};
        if (type === 'add') { // 该节点的父对象
          this.editorType.parent = node.parent.data.subs || node.parent.data;
        } else {
          for (let key in data) {
            this.activeMenu[key] = data[key];
          };
          this.activeMenu.origin = data;
        }
        this.dialogFormVisible = true;
      },

      confirmChg () {
        if (this.checkForm()) {
          if (this.editorType.type === 'add') { // 添加菜单
            this.editorType.parent.push(this.activeMenu);
          } else { // 修改菜单
            for (let key in this.activeMenu) {
              if (key !== 'origin') {
                this.activeMenu.origin[key] = this.activeMenu[key];
              }
            };
          };
          this.dialogFormVisible = false;
        };
      },

      checkForm () {
        if (!this.activeMenu.index) {
          this.$message({
            type: 'warning',
            message: '路由不能为空!'
          });
          return false;
        };
        if (!this.activeMenu.title) {
          this.$message({
            type: 'warning',
            message: '标题不能为空!'
          });
          return false;
        };
        return true;
      },

      renderContent (h, { node, data, store }) {
        let Btn = (<span style="font-size: 12px;">
          <el-button type="text" on-click={ () => { this.chgMenu('add', node, data); } }>添加</el-button>
          <el-button type="text" on-click={ () => { this.chgMenu('chg', node, data); } }>修改</el-button>
          <el-button type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
        </span>);
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            {Btn}
          </span>);
      }
    },

    created () {

    }
  };
</script>