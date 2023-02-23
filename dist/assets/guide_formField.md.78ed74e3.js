import{_ as s,c as a,o as n,a as l}from"./app.e72ba777.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"formField 配置","slug":"formfield-配置","link":"#formfield-配置","children":[]}],"relativePath":"guide/formField.md"}'),e={name:"guide/formField.md"},p=l(`<h3 id="formfield-配置" tabindex="-1">formField 配置 <a class="header-anchor" href="#formfield-配置" aria-hidden="true">#</a></h3><p>formField是一个lazyForm的表单项集合，是lazyForm的核心配置区域</p><h4 id="label" tabindex="-1">label <a class="header-anchor" href="#label" aria-hidden="true">#</a></h4><p>配置表单项label</p><h4 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a></h4><p>配置表单项输入框的默认提示内容</p><h4 id="dialogplaceholder" tabindex="-1">dialogPlaceholder <a class="header-anchor" href="#dialogplaceholder" aria-hidden="true">#</a></h4><p>searchTable 上方输入框提示文本</p><h4 id="prop" tabindex="-1">prop <a class="header-anchor" href="#prop" aria-hidden="true">#</a></h4><p>表单项属性名</p><h4 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h4><p>表单项类型，支持如下类型</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InputTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    select </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    radio </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    checkbox </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checkbox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    textarea </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">textarea</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    searchtable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">searchtable</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="rules" tabindex="-1">rules <a class="header-anchor" href="#rules" aria-hidden="true">#</a></h4><p>为当前表单项校验规则，详情参考Eelement-UI Form</p><h4 id="required" tabindex="-1">required <a class="header-anchor" href="#required" aria-hidden="true">#</a></h4><p>设置当前表单项为必选参数，为true时会在label前方展示*号</p><h4 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h4><p>自定义预留插槽名，开发者可以对表单项进行自由设计</p><h4 id="span" tabindex="-1">span <a class="header-anchor" href="#span" aria-hidden="true">#</a></h4><p>表单项在1行的占比，一行总比例为24，如果当前行无法满足所设置的span,则会进行换行展示</p><h4 id="copies" tabindex="-1">copies <a class="header-anchor" href="#copies" aria-hidden="true">#</a></h4><p>copies用来标识当前表单项在该行所占比例，span=24/copies</p><h4 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h4><p>options用于配置select、radio、checkbox</p><h5 id="用例" tabindex="-1">用例 <a class="header-anchor" href="#用例" aria-hidden="true">#</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">地址</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> InputTypes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">radio</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">city</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">城市</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> InputTypes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">select</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Beijing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Beijing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shanghai</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shanghai</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Nanjing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Nanjing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Chengdu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Chengdu</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shenzhen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shenzhen</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Guangzhou</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Guangzhou</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h4><p>禁用当前表单项</p><h4 id="readonly" tabindex="-1">readonly <a class="header-anchor" href="#readonly" aria-hidden="true">#</a></h4><p>当前表单项只读</p><h4 id="checkboxmin、checkboxmax" tabindex="-1">checkboxMin、checkboxMax <a class="header-anchor" href="#checkboxmin、checkboxmax" aria-hidden="true">#</a></h4><p>多选按钮至少或者至多选择多少个</p><h4 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h4><p>表单项的大小</p><h4 id="buttonstyle" tabindex="-1">buttonStyle <a class="header-anchor" href="#buttonstyle" aria-hidden="true">#</a></h4><p>单选框、多选框样式为按钮类型</p><h4 id="border" tabindex="-1">border <a class="header-anchor" href="#border" aria-hidden="true">#</a></h4><p>单选框、多选框添加边框</p><h4 id="clearable" tabindex="-1">clearable <a class="header-anchor" href="#clearable" aria-hidden="true">#</a></h4><p>表单项可清空</p><h4 id="multiple" tabindex="-1">multiple <a class="header-anchor" href="#multiple" aria-hidden="true">#</a></h4><p>select类型的表单项支持多选</p><h4 id="filterable" tabindex="-1">filterable <a class="header-anchor" href="#filterable" aria-hidden="true">#</a></h4><p>select类型的表单项支持过滤</p><h4 id="remote" tabindex="-1">remote <a class="header-anchor" href="#remote" aria-hidden="true">#</a></h4><p>select类型的表单项支持远程搜索，和filterable、remoteMethod一起开启使用</p><h4 id="remotemethod" tabindex="-1">remoteMethod <a class="header-anchor" href="#remotemethod" aria-hidden="true">#</a></h4><p>远程搜索方法，接收输入的参数，和filterable、remote一起开启使用</p><h4 id="loading" tabindex="-1">loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h4><p>select类型表单项loading状态，可以和远程搜索搭配使用</p><h4 id="allowcreate" tabindex="-1">allowCreate <a class="header-anchor" href="#allowcreate" aria-hidden="true">#</a></h4><p>select类型表单项如没有输入的选项，则直接创建当前输入项</p><h4 id="defaultfirstoption" tabindex="-1">defaultFirstOption <a class="header-anchor" href="#defaultfirstoption" aria-hidden="true">#</a></h4><p>在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</p><h4 id="formatter" tabindex="-1">formatter <a class="header-anchor" href="#formatter" aria-hidden="true">#</a></h4><p>当前表单项值 自定义格式化</p><h4 id="autosize、rows、maxlength、minlength" tabindex="-1">autosize、rows、maxlength、minlength <a class="header-anchor" href="#autosize、rows、maxlength、minlength" aria-hidden="true">#</a></h4><p>表单域自动适应大小、行、最大最小长度</p><h4 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-hidden="true">#</a></h4><p>控制是否能被用户缩放</p><h4 id="griddata" tabindex="-1">gridData <a class="header-anchor" href="#griddata" aria-hidden="true">#</a></h4><p>表格数据源</p><h4 id="tablefield" tabindex="-1">tableField <a class="header-anchor" href="#tablefield" aria-hidden="true">#</a></h4><p>表格列表项配置</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TableField</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">align</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="rowkey" tabindex="-1">rowKey <a class="header-anchor" href="#rowkey" aria-hidden="true">#</a></h4><p>单行的唯一标识，需为当前行数据对象的某个属性名</p><h4 id="fieldclick" tabindex="-1">fieldClick <a class="header-anchor" href="#fieldclick" aria-hidden="true">#</a></h4><p>表单项被点击时触发</p><h4 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-hidden="true">#</a></h4><p>表单项值被改变时触发</p><h4 id="blur" tabindex="-1">blur <a class="header-anchor" href="#blur" aria-hidden="true">#</a></h4><p>表单项失去焦点时触发</p><h4 id="foucs" tabindex="-1">foucs <a class="header-anchor" href="#foucs" aria-hidden="true">#</a></h4><p>表单项获取焦点时触发</p><h4 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h4><p>表单项值被清除时触发</p><h4 id="gettabledata" tabindex="-1">getTableData <a class="header-anchor" href="#gettabledata" aria-hidden="true">#</a></h4><p>表单数据源获取函数，需<code>return {data,total}</code></p><h4 id="needprops" tabindex="-1">needProps <a class="header-anchor" href="#needprops" aria-hidden="true">#</a></h4><p>[&#39;行数据属性：表单属性&#39;]=》将table选中的数据中的部分属性映射到表单属性中，作为其值</p><h4 id="confirmselect" tabindex="-1">confirmSelect <a class="header-anchor" href="#confirmselect" aria-hidden="true">#</a></h4><p>searchtable 类型的表格确认选择回调</p><h4 id="clickcell" tabindex="-1">clickCell <a class="header-anchor" href="#clickcell" aria-hidden="true">#</a></h4><p>点击表格单元格触发的回调</p>`,86),o=[p];function r(t,c,D,i,y,F){return n(),a("div",null,o)}const C=s(e,[["render",r]]);export{h as __pageData,C as default};