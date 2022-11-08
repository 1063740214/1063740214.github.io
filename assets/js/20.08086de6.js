(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{344:function(s,e,a){"use strict";a.r(e);var t=a(3),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"一、项目配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、项目配置"}},[s._v("#")]),s._v(" 一、项目配置")]),s._v(" "),e("p",[s._v("本篇教程在示例步骤中使用了以下版本的软件。操作时，请您以实际软件版本为准。")]),s._v(" "),e("ul",[e("li",[s._v("操作系统：CentOS 7.9 64位")]),s._v(" "),e("li",[s._v("glusterfs：9.2-1")])]),s._v(" "),e("h4",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档：")]),s._v(" "),e("blockquote",[e("p",[s._v("官网: https://docs.gluster.org/en/latest/Quick-Start-Guide/Quickstart/\n官方安装url: https://wiki.centos.org/SpecialInterestGroup/Storage/gluster-Quickstart")])]),s._v(" "),e("h3",{attrs:{id:"二、安装glusterfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、安装glusterfs"}},[s._v("#")]),s._v(" 二、安装GlusterFS")]),s._v(" "),e("h4",{attrs:{id:"使用storage-sig-yum-repos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用storage-sig-yum-repos"}},[s._v("#")]),s._v(" 使用Storage SIG Yum Repos")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" centos-release-gluster "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" //这个源会默认选择Gluster提供长期维护的版本\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("Gluster提供称为“长期维护”（LTM）和“短期维护”（STM）的不同发布流。CentOS Extras中有几个centos-release-gluster软件包，默认情况下，安装centos-release-gluster时会选择最新的LTM版本。有关不同Gluster版本的更多详细信息，请参阅发布计划。")])]),s._v(" "),e("h4",{attrs:{id:"第1步-至少有两个节点-复制模式最好3个节点以上-防止脑裂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1步-至少有两个节点-复制模式最好3个节点以上-防止脑裂"}},[s._v("#")]),s._v(" 第1步 - 至少有两个节点（复制模式最好3个节点以上，防止脑裂）")]),s._v(" "),e("ul",[e("li",[s._v("名为“server1”和“server2”的两台服务器上的CentOS 7")]),s._v(" "),e("li",[s._v("一个有效的网络连接")]),s._v(" "),e("li",[s._v("至少两个虚拟磁盘，一个用于OS安装（sda），另一个用于服务GlusterFS存储（sdb）。这将模拟真实环境部署，您可能希望将GlusterFS存储与操作系统安装分开。")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意：GlusterFS将其动态生成的配置文件存储在/var/ lib/glusterd中，如果在任何时间点GlusterFS无法写入这些文件，它将至少导致系统性能不稳定，或者更糟糕的是使系统完全脱机。建议为/var/log等目录创建单独的分区，以确保不会发生这种情况。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ln -s /data/glusterfs1/etc/glusterfs/  /etc/glusterfs")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /data/glusterfs1/var/lib/glusterd/ /var/lib/glusterd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /data/glusterfs1/var/log/glusterfs/ /var/log/glusterfs \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"第2步-格式化并安装bricks-每个节点上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2步-格式化并安装bricks-每个节点上"}},[s._v("#")]),s._v(" 第2步 -格式化并安装bricks（每个节点上）")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：这些示例将假设brick将挂载到 /dev/sdb1")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mkfs.xfs "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" /dev/sdb1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /bricks/brick1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/fstab\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##添加以下内容：")]),s._v("\n/dev/sdb1 /bricks/brick1 xfs defaults "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##然后只执行挂载：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##您现在应该看到sdb1挂载在  /bricks/brick1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：在CentOS 6上，您需要安装xfsprogs包才能格式化XFS文件系统\nyum install xfsprogs")])]),s._v(" "),e("h4",{attrs:{id:"第3步-安装glusterfs-在每个节点上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3步-安装glusterfs-在每个节点上"}},[s._v("#")]),s._v(" 第3步 - 安装GlusterFS（在每个节点上）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##安装软件（官网）：")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" glusterfs-server "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：安装软件（在docker容器 需加参数--privileged=true并安装glusterfs，glusterfs-fuse；glusterfs和glusterfs-fuse为glusterfs-server的依赖包）：\nyum -y install glusterfs glusterfs-fuse glusterfs-server")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##启动glusterfs：")]),s._v("\nsystemctl start glusterd\nsystemctl status glusterd\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" glusterd\n\nsystemctl start glusterfsd\nsystemctl status glusterfsd\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" glusterfsd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"第4步-防火墙设置-在每个节点上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第4步-防火墙设置-在每个节点上"}},[s._v("#")]),s._v(" 第4步 -防火墙设置(在每个节点上)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##关闭防火墙： ")]),s._v("\nsystemctl stop firewalld\nsystemctl disable firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"步骤5-配置信任池-任意一个节点上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-配置信任池-任意一个节点上"}},[s._v("#")]),s._v(" 步骤5 - 配置信任池(任意一个节点上)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##如果在“server1”上执行")]),s._v("\ngluster peer probe server2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##注意：使用主机名时，需要从另一台服务器探测第一台服务器以设置其主机名。")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##如果在“server2”上执行")]),s._v("\ngluster peer probe server1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##注意：建立此池后，只有受信任的成员才能将新服务器探测到池中。新服务器无法探测池，必须从池中进行探测。")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h5",{attrs:{id:"拓展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[s._v("#")]),s._v(" 拓展：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##移除池中服务器")]),s._v("\ngluster peer detach "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.111 //移除节点detach "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.111\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看池中节点")]),s._v("\ngluster peer status //查看池中节点\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"步骤6-设置glusterfs卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤6-设置glusterfs卷"}},[s._v("#")]),s._v(" 步骤6 - 设置GlusterFS卷")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##在server1和server2上：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /bricks/brick1/gv0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##从任何单一服务器：")]),s._v("\ngluster volume create test-volume replica "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" server1:/bricks/brick1/gv0 server2:/bricks/brick1/gv0 force\ngluster volume start test-volume\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("例：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("gluster volume create kafka_logs_90_1 replica "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.111:/data/glusterfs1/IP_100_90/kafka_90_1/brick1/logs "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.195:/home/glusterfs2/IP_100_90/kafka_90_1/brick1/logs force\ngluster volume start kafka_logs_90_1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##/启/停/删除卷")]),s._v("\ngluster volume start test-volume\ngluster volume stop test-volume\ngluster volume delete test-volume\ngluster volume list              /*列出集群中的所有卷*/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看卷是否启动（任意服务器）")]),s._v("\ngluster volume info\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##注意：如果未启动卷，则会在一个或两个服务器上的/var/log/glusterfs下的日志文件中提供有关出错的线索- 通常在etc-glusterfs-glusterd.vol.log中，日志名字根据存储目录来的")]),s._v("\n\ngluster volume status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h4",{attrs:{id:"步骤7-挂载glusterfs卷-客户端操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤7-挂载glusterfs卷-客户端操作"}},[s._v("#")]),s._v(" 步骤7 - 挂载GlusterFS卷（客户端操作）")]),s._v(" "),e("h5",{attrs:{id:"客户端安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端安装"}},[s._v("#")]),s._v(" 客户端安装")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" glusterfs glusterfs-fuse attr "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"glusterfs方式挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glusterfs方式挂载"}},[s._v("#")]),s._v(" glusterfs方式挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" glusterfs server1:test-volume /data/test\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" glusterfs 服务器名/IP:卷名 要挂载的目录\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" //查看是否挂载成功\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h5",{attrs:{id:"自动挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动挂载"}},[s._v("#")]),s._v(" 自动挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##要安装卷，请编辑/ etc / fstab文件并添加以下行：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##格式：HOSTNAME-OR-IPADDRESS:/VOLNAME MOUNTDIR glusterfs defaults,_netdev 0 0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/fstab\nserver1:/test-volume /data/test glusterfs defaults,_netdev "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);