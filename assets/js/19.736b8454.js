(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{339:function(n,p,t){"use strict";t.r(p);var i=t(3),v=Object(i.a)({},(function(){var n=this,p=n._self._c;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("h1",{attrs:{id:"spring-概述"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#spring-概述"}},[n._v("#")]),n._v(" Spring 概述")]),n._v(" "),p("p",[n._v("Spring 是分层的 Java SE/EEfull-stack （一站式）"),p("a",{attrs:{href:"/pages/20220904173900"}},[n._v("轻量级")]),n._v("开源框架，以 IoC（Inverse Of Control：反转控制）和 AOP（Aspect Oriented Programming：面向切面编程）为内核，提供了WEB层 Spring MVC 和持久层 Spring JDBC 以及业务层事务管理等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和类库，逐渐成为使用最多的 Java EE 企业应用开源框架。")]),n._v(" "),p("div",{staticClass:"custom-block note"},[p("p",{staticClass:"custom-block-title"},[n._v("可以从JavaEE开发的三层结构来看")]),n._v(" "),p("ul",[p("li",[p("p",[n._v("WEB层：Spring MVC")])]),n._v(" "),p("li",[p("p",[n._v("业务层：Bean管理（IOC）")])]),n._v(" "),p("li",[p("p",[n._v("持久层：Spring的JDBC模板，ORM模板用于整合其他的持久层模板")])])])]),n._v(" "),p("div",{staticClass:"custom-block note"},[p("p",{staticClass:"custom-block-title"},[n._v("何为一站式（full-stack）?")]),n._v(" "),p("ul",[p("li",[p("p",[n._v("full-stack 的设计，意味着各层能够无缝的集成在一起，遵循的DRY原则（don't repeat yourself)，将各层共用的东西，抽取出来，并通过自顶向下的设计，无缝的集成在一起，粘合在一起，达到更高层次、更粗粒度的重用，同时为了保证灵活的可扩展性，在更高、更粗的粒度上遵守开放-封闭的原则，在各层的各个关键点，要提供诸多的钩子，回调的接口，供使用者扩展。full-stack的设计，在层与层之间，并不一味的追求松散的机制，而是相反，在层与层之间增强一定的内聚性，粘合力，以此来达到粗粒度的封装与重用。")])]),n._v(" "),p("li",[p("p",[n._v("可以说full-stack 的设计，其爆发出的威力是巨大的，相对普通的单一层面的设计，在开发效率上不是一个层次上的，基于28原理的设计，可以满足80的调用者直接开发，19%的调用者，通过扩展点进行扩展来满足需求，对于1%钻角尖的需求，自己去造轮子。")])])])]),n._v(" "),p("div",{staticClass:"custom-block note"},[p("p",{staticClass:"custom-block-title"},[n._v("为什么说Spring是一站式的框架？")]),n._v(" "),p("ul",[p("li",[p("p",[n._v("一方面，Spring属于业务层的一个框架，但Spring框架提供了Spring MVC模板（属于Spring一部分），它可以当做WEB层小框架，处理web层事务。而针对于持久层，Spring框架也提供了Spring JDBC模板，来帮助操作数据库。这样一来，Spring框架就实现了全覆盖，也就是一站式，只使用Spring框架就可以进行JavaEE开发。")])]),n._v(" "),p("li",[p("p",[n._v("另一方面，Spring框架可以集成和整合WEB层框架如Structs框架，也可以集成和整合持久层框架如Hibernate、Mybatis框架。在整合这些框架后，可以使得整个开发管理更方便、简单。")])])])]),n._v(" "),p("div",{staticClass:"custom-block tip"},[p("p",{staticClass:"custom-block-title"},[n._v("小知识")]),n._v(" "),p("p",[n._v("​\tRod Johnson在2002年编著的《Expert one on one J2EE design and development》一书中，对Java EE 系统框架臃肿、低效、脱离现实的种种现状提出了质疑，并积极寻求探索革新之道。以此书为指导思想，他编写了interface21框架，这是一个力图冲破J2EE传统开发的困境，从实际需求出发，着眼于轻便、灵巧，易于开发、测试和部署的轻量级开发框架。Spring框架即以interface21框架为基础，经过重新设计，并不断丰富其内涵，于2004年3月24日，发布了1.0正式版。同年他又推出了一部堪称经典的力作《Expert one-on-one J2EE Development without EJB》，该书在Java世界掀起了轩然大波，不断改变着Java开发者程序设计和开发的思考方式。在该书中，作者根据自己多年丰富的实践经验，对EJB的各种笨重臃肿的结构进行了逐一的分析和否定，并分别以简洁实用的方式替换之。至此一战功成，Rod Johnson成为一个改变Java世界的大师级人物。")])]),n._v(" "),p("p",[p("strong",[n._v("spring的优点")])]),n._v(" "),p("ul",[p("li",[p("p",[n._v("方便解耦，简化开发")]),n._v(" "),p("p",[n._v("Spring就是一个大工厂，可以将所有对象创建和依赖关系维护，交给Spring管理")])]),n._v(" "),p("li",[p("p",[n._v("AOP编程的支持")]),n._v(" "),p("p",[n._v("Spring提供面向切面编程，可以方便的实现对程序进行权限拦截、运行监控等功能")])]),n._v(" "),p("li",[p("p",[n._v("声明式事务的支持")]),n._v(" "),p("p",[n._v("只需要通过配置就可以完成对事务的管理，而无需手动编程")])]),n._v(" "),p("li",[p("p",[n._v("方便程序的测试")]),n._v(" "),p("p",[n._v("Spring对Junit4支持，可以通过注解方便的测试Spring程序")])]),n._v(" "),p("li",[p("p",[n._v("方便集成各种优秀框架")]),n._v(" "),p("p",[n._v("Spring不排斥各种优秀的开源框架，其内部提供了对各种优秀框架（如：Struts2、Hibernate、MyBatis、Quartz等）的直接支持")])]),n._v(" "),p("li",[p("p",[n._v("降低JavaEE API的使用难度")]),n._v(" "),p("p",[n._v("Spring 对JavaEE开发中非常难用的一些API（JDBC、JavaMail、远程调用等），都提供了封装，使这些API应用难度大大降低")])])]),n._v(" "),p("p",[p("strong",[n._v("Spring的体系结构")])]),n._v(" "),p("p",[p("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200311101149267.gif",alt:"在这里插入图片描述"}})]),n._v(" "),p("ul",[p("li",[p("p",[n._v("核心容器")]),n._v(" "),p("p",[n._v("Spring的核心容器是其他模块建立的基础，有Spring-core、Spring-beans、Spring-context、Spring-context-support和Spring-expression（String表达式语言）等模块组成。")]),n._v(" "),p("p",[n._v("Spring-core模块：提供了框架的基本组成部分，包括控制反转（Inversion of Control，IOC）和依赖注入（Dependency Injection，DI）功能。")]),n._v(" "),p("p",[n._v("Spring-beans模块：提供了BeanFactory，是工厂模式的一个经典实现，Spring将管理对象称为Bean。")]),n._v(" "),p("p",[n._v("Spring-context模块：建立在Core和Beans模块的基础之上，提供一个框架式的对象访问方式，是访问定义和配置的任何对象的媒介。ApplicationContext接口是Context模块的焦点。")]),n._v(" "),p("p",[n._v("Spring-context-support模块：支持整合第三方库到Spring应用程序上下文，特别是用于高速缓存（EhCache、JCache）和任务调度（CommonJ、Quartz）的支持。")]),n._v(" "),p("p",[n._v("Spring-expression模块：提供了强大的表达式语言去支持运行时查询和操作对象图。这是对JSP2.1规范中规定的统一表达式语言（Unified EL）的扩展。该语言支持设置和获取属性值、属性分配、方法调用、访问数组、集合和索引器的内容、逻辑和算术运算、变量命名以及从Spring的IOC容器中以名称检索对象。它还支持列表投影、选择以及常用的列表聚合。")])]),n._v(" "),p("li",[p("p",[n._v("AOP和Instrumentation")]),n._v(" "),p("p",[n._v("Spring-aop模块：提供了一个符合AOP要求的面向切面的编程实现，允许定义方法拦截器和切入点，将代码按照功能进行分离，以便干净地解耦。")]),n._v(" "),p("p",[n._v("Spring-aspects模块：提供了与AspectJ的集成功能，AspectJ是一个功能强大且成熟的AOP框架。")]),n._v(" "),p("p",[n._v("Spring-instrument模块：提供了类植入（Instrumentation）支持和类加载器的实现，可以在特定的应用服务器中使用。")])]),n._v(" "),p("li",[p("p",[n._v("消息")]),n._v(" "),p("p",[n._v("Spring4.0以后新增了消息（Spring-messaging）模块，该模块提供了对消息传递体系结构和协议的支持。")])]),n._v(" "),p("li",[p("p",[n._v("数据访问/集成")]),n._v(" "),p("p",[n._v("数据访问/集成层由JDBC、ORM、OXM、JMS和事务模块组成。")]),n._v(" "),p("p",[n._v("Spring-jdbc模块：提供了一个JDBC的抽象层，消除了烦琐的JDBC编码和数据库厂商特有的错误代码解析。")]),n._v(" "),p("p",[n._v("Spring-orm模块：为流行的对象关系映射（Object-Relational Mapping）API提供集成层，包括JPA和Hibernate。使用Spring-orm模块可以将这些O/R映射框架与Spring提供的所有其他功能结合使用，例如声明式事务管理功能。")]),n._v(" "),p("p",[n._v("Spring-oxm模块：提供了一个支持对象/XML映射的抽象层实现，例如JAXB、Castor、JiBX和XStream。")]),n._v(" "),p("p",[n._v("Spring-jms模块（Java Messaging Service）：指Java消息传递服务，包含用于生产和使用消息的功能。自Spring4.1以后，提供了与Spring-messaging模块的集成。")]),n._v(" "),p("p",[n._v("Spring-tx模块（事务模块）：支持用于实现特殊接口和所有POJO（普通Java对象）类的编程和声明式事务管理。")])]),n._v(" "),p("li",[p("p",[n._v("Web")]),n._v(" "),p("p",[n._v("Web层由Spring-web、Spring-webmvc、Spring-websocket和Portlet模块组成。")]),n._v(" "),p("p",[n._v("Spring-web模块：提供了基本的Web开发集成功能，例如多文件上传功能、使用Servlet监听器初始化一个IOC容器以及Web应用上下文。")]),n._v(" "),p("p",[n._v("Spring-webmvc模块：也称为Web-Servlet模块，包含用于web应用程序的Spring MVC和REST Web Services实现。Spring MVC框架提供了领域模型代码和Web表单之间的清晰分离，并与Spring Framework的所有其他功能集成。")]),n._v(" "),p("p",[n._v("Spring-websocket模块：Spring4.0以后新增的模块，它提供了WebSocket和SocketJS的实现。")]),n._v(" "),p("p",[n._v("Portlet模块：类似于Servlet模块的功能，提供了Portlet环境下的MVC实现。")])]),n._v(" "),p("li",[p("p",[n._v("测试")]),n._v(" "),p("p",[n._v("Spring-test模块支持使用JUnit或TestNG对Spring组件进行单元测试和集成测试。")])])])])}),[],!1,null,null,null);p.default=v.exports}}]);