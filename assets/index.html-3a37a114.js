import{_ as n,p as s,q as e,a1 as t}from"./framework-204010b2.js";const a={},o=t(`<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
<span class="token comment">//tsconfig.json是ts编译器的配置文件，ts编译器</span>
<span class="token comment">//路径：**表示任意目录 *表示任意文件</span>
  <span class="token comment">// 需编译文件列表</span>
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/index.ts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 包含匹配器</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 排除匹配器</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.js&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置继承</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./ts/base&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存时编译</span>
  <span class="token string-property property">&quot;compileOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 编译配置</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 工程引用</span>
  <span class="token string-property property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="complieroptions-编译项" tabindex="-1"><a class="header-anchor" href="#complieroptions-编译项" aria-hidden="true">#</a> complierOptions 编译项</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token comment">// &quot;incremental&quot;: true,                       // 增置编译</span>
    <span class="token comment">// &quot;tsBuildlnfoFile&quot;: &quot;./buildFile&quot;,          // 增置编译文件的存储位置</span>
　　 <span class="token comment">// &quot;diagnostics&quot;: true,　　　　　　　　　　　　　　// 打印诊断倍息</span>
    <span class="token comment">// &quot;target&quot;: &quot;es5&quot;,                           // 目标语言的版本</span>
    <span class="token comment">// &quot;module&quot;: &quot;commonjs&quot;,                      // 生成代码的模块标准</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./app-js&quot;,                     // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中</span>
    <span class="token comment">// &quot;lib&quot;: [],                                 // TS 需要引用的库，即声明文件，es5 默认&quot;dom&quot;, &quot;es5&quot;, &quot;scripthost&quot;</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                           // 允许编译：IS 文件（js、jsx)</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                           // 允许在JS文件中报错，通常与allowJS _起使用</span>
    <span class="token comment">// &quot;outDir&quot;: &quot;./dist&quot;,                        // 指定输出目录</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                           // 指定输入文件目录（用于输出）</span>
    <span class="token comment">// &quot;declaration&quot;: true,                       // 生成声明文件</span>
    <span class="token comment">// &quot;declarationDir&quot;: &quot;./d&quot;,                   // 声明文件的路径</span>
    <span class="token comment">// &quot;emitDeclarationOnly&quot;: true,               // 只生成声明文件</span>
    <span class="token comment">// &quot;sourceMap&quot;: true,                         // 生成目标文件的    sourceMap</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,                   // 生成目标文件的 inline sourceMap</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                    // 生成声明文件的 sourceMap</span>
    <span class="token comment">//  &quot;typeRoots&quot;:[],                           // 声明文件目录，默认node_modules/@types</span>
    <span class="token comment">//  &quot;types&quot;:[],                               // 声明文件包</span>
    <span class="token comment">//  &quot;removeComments&quot;:true,                    // 删除注释</span>
    <span class="token comment">//    &quot;noEmit&quot;: true,                           // 不输出文件</span>
    <span class="token comment">//    &quot;noEmitOnError&quot;: true,                    // 发生错误时不输出文件</span>
    <span class="token comment">// &quot;noEmitHelpers&quot;: true,                     // 不生成helper 函数，需要额外安装ts-helpers</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                     // 通过tslib 引入 helper 函数，文件必须是模块</span>
    <span class="token comment">// unoEmitOnErrorM: true,                     // 发生错误时不输出文件</span>
    <span class="token comment">// &quot;noEmitHelpers&quot;: true,                     // 不生成 helper 函数，需额外安装 ts-helpers </span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                     // 通过tslib引入helper函数，文件必须是模块</span>
    <span class="token comment">// &quot;downlevellteration&quot; : true,               // 降级遍历器的实现（es3/5)</span>
    <span class="token comment">// &quot;strict&quot;: true,                            // 开启所有严格的类型检查</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: false,                     // 在代码中注入&quot;use strict&quot;;</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: false,                    // 不允许隐式的any类型</span>
    <span class="token comment">// &quot;strictNullChecksilj false,                // 不允许把null、undefined赋值给其他类型变置</span>
    <span class="token comment">// &quot;strictFunctionTypes&quot;: false,              // 不允许函数参数双向协变</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: false,     // 类的实例属性必须初始化</span>
    <span class="token comment">// strictBindCallApply: false,                // 严格的 bind/call/apply 检査</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: false,                   // 不允许this有隐式的any类型</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                    // 检査只声明，未使用的局部变置 </span>
    <span class="token comment">// &quot;nollnusedParameters&quot;: true,               // 检查未使用的函数参数</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,        // 防止switch语句贯穿</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,                 // 每个分支都要有返回值</span>
    <span class="token comment">// &quot;esModulelnterop&quot;: true,                   // 允许export = 导出，由import from导入 </span>
    <span class="token comment">// &quot;allowUrndGlobalAccess&quot;: true,             // 允许在模块中访问UMD全局变置</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,                // 模块解析策略</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                           // 解析非相对模块的基地址</span>
    <span class="token comment">// &quot;paths&quot;: {</span>
    <span class="token comment">//    &quot;jquery&quot;: [&quot;node-modules/jquery/dist/jquery.slim.min.js&quot;]</span>
    <span class="token comment">//  }</span>
    <span class="token comment">// &quot;rootDirs&quot;: [&quot;src&quot;, &quot;out&quot;],                // 将多个目录放在一个虚拟目录下，用于运行时</span>
    <span class="token comment">// &quot;listEmittedFiles&quot;: true,                  // 打印输出的文件</span>
    <span class="token comment">// &quot;listFiles&quot;: true,                         // 打印编译的文件（包括引用的声明文件）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function l(u,c){return s(),e("div",null,i)}const r=n(a,[["render",l],["__file","index.html.vue"]]);export{r as default};
