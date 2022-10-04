(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{346:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"spring-ioc-inversion-of-control控制反转-未完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc-inversion-of-control控制反转-未完成"}},[s._v("#")]),s._v(" Spring  IoC(Inversion of Control控制反转)未完成")]),s._v(" "),t("p",[t("strong",[s._v("IoC概念")])]),s._v(" "),t("p",[s._v("何为控制反转？对象实例的控制权由调用者转移到Spring容器，控制权发生了反转。")]),s._v(" "),t("p",[s._v("为什么能实现控制反转呢？对象实例由Spring容器创建，且对象之间的依赖关系由Spring容器管理，容器负责将被依赖对象注入调用者。")]),s._v(" "),t("p",[s._v("为什么要实现控制反转呢？主要目的为了解耦，体现了一种“组合”的理念。如搭积木，需要什么积木直接从容器中进行找，而不是自己去创造一个新的积木。写代码的时候，我们只需要从Spring容器中找依赖，不需要知道这些依赖是如何实现的。而如果代码出现错误了，我们也可以直接在Spring容器中修改依赖，而不需要修改我们自己写的代码了。")]),s._v(" "),t("p",[s._v("依赖注入&控制反转的区别：角度不同，但概念相同。依赖注入从Spring容器的角度进行描述，Spring容器创建对象实例的过程看起来就像是针管将其中的液体注入到了人体中，只不过Spring容器是将依赖注入到了自己写的程序里；而控制反转是从编程者的角度进行描述，编程者成了调用者而不是创建者（控制者），所以形成了反转。")]),s._v(" "),t("p",[s._v("依赖是什么？有了依赖反转，就会引出依赖的概念。简单来说，依赖就是配置文件XML中申明的Bean。")]),s._v(" "),t("p",[s._v("为什么取依赖这个名呢？可以从依赖关系来看，比如Class A要运行就必须依赖于Class B，就可以说Class A依赖于Class B，依赖注入就是将Class B配置在配置文件中，由Spring容器进行控制，Class A需要的时候，就由Spring容器将Class B注入到Class A中。")]),s._v(" "),t("p",[s._v("bean管理是指（1）spring创建对象；（2）spring注入属性")]),s._v(" "),t("p",[t("strong",[s._v("如何使用代码来进行装配Bean")])]),s._v(" "),t("p",[s._v("XML文件中配置Bean")]),s._v(" "),t("div",{staticClass:"language-XML line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="UTF-8"?>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://maven.apache.org/POM/4.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xsi:")]),s._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 将指定类TestDaoImpl配置给Spring，让Spring创建其实例 --\x3e")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("bean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("dao.TestDaoImpl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化Spring容器ApplicationContext，加载配置文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @SuppressWarnings抑制警告的关键字，有泛型未指定类型")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SuppressWarnings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppicationContext")]),s._v(" appCon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassPathXmlApplicationContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"applicationContext.xml"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过容器获取test实例")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestDao")]),s._v(" tt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestDao")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("appCon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test为配置文件中的id")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("使用注解(annotation)进行配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("声明Bean的注解（替代XML文件中的配置）")]),s._v(" "),t("p",[s._v("从代码的本质而言，其实就只有一个注解@Component")]),s._v(" "),t("p",[s._v("@Component：该注解是一个泛化的概念，仅仅表示一个组件对象（Bean），可以作用在任何层次上，没有明确的角色。也是针对类而言，任何层次指的是数据访问层之类的。")]),s._v(" "),t("p",[s._v("但从理解代码的角度而言@Component就很难理解，所能传达的意思仅仅是这个角色是组件对象（Bean），无法传递更多的消息，于是就衍生出了@Repository、@Service、@Controller注释。")]),s._v(" "),t("p",[s._v("@Repository：该注解用于将数据访问层（DAO）的类表示为Bean，即注解数据访问层Bean")]),s._v(" "),t("p",[s._v("@Service：注解业务逻辑组件类（Service层）")]),s._v(" "),t("p",[s._v("@Controller：注解控制器组件类（Spring MVC的Controller）")]),s._v(" "),t("p",[s._v("这四个标签如果用混了，代码不会报错，只会对理解代码的人造成一些误导。")])]),s._v(" "),t("li",[t("p",[s._v("注入Bean的注解（替代Java中的加载配置文件）")]),s._v(" "),t("p",[s._v("@Autowired：该注解可以对类成员变量、方法集构造方法进行标注，完成自动装配的工作。通过@Autowired的使用来消除setter和getter方法。默认按照Bean的类型进行装配。用的比较多。")]),s._v(" "),t("p",[s._v("@Qualifier：该注解与@Autowired注解配合使用。当@Autowired注解需要按照名称来装配注入时，则需要结合该注解一起使用，Bean的实例名称由@Qualifier注解的参数指定。按照Bean的名称进行装配。")]),s._v(" "),t("p",[s._v("@Resource：该注解在JDK10版本之上就被舍弃了，可以减少使用，也是按名称进行装配，类似@Qualifier，只不过不需要@Autowired注解配合。")])]),s._v(" "),t("li",[t("p",[s._v("Java配置")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);