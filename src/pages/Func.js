import React from 'react'

export default function Func() {
  return (
    <div>
     <code>&lt;&quest;php<br/>
&sol;&sol; В файле functions&period;php вашей темы или плагина&colon;<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;plugin&lowbar;session&lowbar;start&apos;&rpar;&semi;<br/>
function my&lowbar;plugin&lowbar;session&lowbar;start&lpar;&rpar;<br/>
&lbrace;<br/>
    session&lowbar;start&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
<br/>
require&lowbar;once ABSPATH &period; &apos;wp-admin&sol;includes&sol;media&period;php&apos;&semi;<br/>
function myplugin&lowbar;install&lpar;&rpar;<br/>
&lbrace;<br/>
    global &dollar;wpdb&semi;<br/>
    &dollar;table&lowbar;name &equals; &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&semi;<br/>
<br/>
    &dollar;charset&lowbar;collate &equals; &dollar;wpdb-&gt;get&lowbar;charset&lowbar;collate&lpar;&rpar;&semi;<br/>
<br/>
    &dollar;sql &equals; &quot;CREATE TABLE &dollar;table&lowbar;name &lpar;<br/>
        id mediumint&lpar;9&rpar; NOT NULL AUTO&lowbar;INCREMENT&comma;<br/>
        user&lowbar;login varchar&lpar;60&rpar; NOT NULL UNIQUE&comma;<br/>
        user&lowbar;email varchar&lpar;100&rpar; NOT NULL UNIQUE&comma;<br/>
        user&lowbar;pass varchar&lpar;255&rpar; NOT NULL&comma;<br/>
        &sol;&sol; Добавьте свои кастомные поля<br/>
        meta longtext&comma;<br/>
        reset&lowbar;token varchar&lpar;255&rpar;&comma;<br/>
        created&lowbar;at datetime DEFAULT CURRENT&lowbar;TIMESTAMP&comma;<br/>
        PRIMARY KEY  &lpar;id&rpar;<br/>
    &rpar; &dollar;charset&lowbar;collate&semi;&quot;&semi;<br/>
<br/>
<br/>
    require&lowbar;once&lpar;ABSPATH &period; &apos;wp-admin&sol;includes&sol;upgrade&period;php&apos;&rpar;&semi;<br/>
    dbDelta&lpar;&dollar;sql&rpar;&semi;<br/>
&rbrace;<br/>
register&lowbar;activation&lowbar;hook&lpar;<br/>
    &lowbar;&lowbar;FILE&lowbar;&lowbar;&comma;<br/>
    &apos;myplugin&lowbar;install&apos;<br/>
&rpar;&semi;<br/>
<br/>
&sol;&sol; Функция для удаления таблицы при деактивации плагина<br/>
function myplugin&lowbar;uninstall&lpar;&rpar;<br/>
&lbrace;<br/>
    global &dollar;wpdb&semi;<br/>
    &dollar;table&lowbar;name &equals; &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&semi;<br/>
    &dollar;sql &equals; &quot;DROP TABLE IF EXISTS &dollar;table&lowbar;name&quot;&semi;<br/>
    require&lowbar;once&lpar;ABSPATH &period; &apos;wp-admin&sol;includes&sol;upgrade&period;php&apos;&rpar;&semi;<br/>
    dbDelta&lpar;&dollar;sql&rpar;&semi;<br/>
&rbrace;<br/>
register&lowbar;uninstall&lowbar;hook&lpar;&lowbar;&lowbar;FILE&lowbar;&lowbar;&comma; &apos;myplugin&lowbar;uninstall&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;login&lowbar;form&lpar;&rpar;<br/>
&lbrace;<br/>
    if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;username&apos;&rbrack;&rpar; &amp;&amp; isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        &dollar;username &equals; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;username&apos;&rbrack;&rpar;&semi;<br/>
        &dollar;password &equals; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&rpar;&semi;<br/>
        &dollar;credentials &equals; array&lpar;<br/>
            &apos;user&lowbar;login&apos; &equals;&gt; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;username&apos;&rbrack;&rpar;&comma;<br/>
            &apos;user&lowbar;password&apos; &equals;&gt; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&rpar;<br/>
        &rpar;&semi;<br/>
<br/>
        global &dollar;wpdb&semi;<br/>
        &dollar;table&lowbar;name &equals; &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&semi;<br/>
        &dollar;user&lowbar;data &equals; &dollar;wpdb-&gt;get&lowbar;row&lpar;&dollar;wpdb-&gt;prepare&lpar;&quot;SELECT &ast; FROM &dollar;table&lowbar;name WHERE user&lowbar;login &equals; &percnt;s&quot;&comma; &dollar;username&rpar;&rpar;&semi;<br/>
        &sol;&sol;echo &quot;&quot; &period; wp&lowbar;check&lowbar;password&lpar;&dollar;password&comma; &dollar;user&lowbar;data-&gt;user&lowbar;pass&comma; &dollar;user&lowbar;data-&gt;id&rpar; &period; &quot;&quot;&semi;<br/>
        if &lpar;&dollar;user&lowbar;data&rpar; &lbrace;<br/>
            &sol;&sol; Проверяем пароль<br/>
            if &lpar;wp&lowbar;check&lowbar;password&lpar;&dollar;password&comma; &dollar;user&lowbar;data-&gt;user&lowbar;pass&comma; &dollar;user&lowbar;data-&gt;id&rpar;&rpar; &lbrace;<br/>
                &sol;&sol;echo &quot;Logged in successfully &quot;&period;&dollar;user&lowbar;data-&gt;id&semi;<br/>
                &dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack; &equals; &dollar;user&lowbar;data&semi;<br/>
            &rbrace;<br/>
        &rbrace;<br/>
    &rbrace;<br/>
&rbrace;<br/>
<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;login&lowbar;form&apos;&rpar;&semi;<br/>
<br/>
<br/>
function my&lowbar;custom&lowbar;login&lowbar;form&lowbar;function&lpar;&rpar;<br/>
&lbrace;<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
    global &dollar;wpdb&semi;<br/>
&quest;&gt;<br/>
    &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
        &lt;label for&equals;&quot;username&quot;&gt;Имя пользователя&colon;&lt;&sol;label&gt;<br/>
        &lt;input type&equals;&quot;text&quot; name&equals;&quot;username&quot; id&equals;&quot;username&quot; required&gt;<br/>
        &lt;label for&equals;&quot;password&quot;&gt;Пароль&colon;&lt;&sol;label&gt;<br/>
<br/>
        &lt;input type&equals;&quot;password&quot; name&equals;&quot;password&quot; id&equals;&quot;password&quot; required&gt;<br/>
        &lt;button type&equals;&quot;submit&quot;&gt;Войти&lt;&sol;button&gt;<br/>
    &lt;&sol;form&gt;<br/>
&lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;custom&lowbar;login&lowbar;form&lowbar;function&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;custom&lowbar;logged&lowbar;form&lowbar;function&lpar;&rpar;<br/>
&lbrace;<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
    global &dollar;wpdb&semi;<br/>
&quest;&gt;<br/>
    &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
        &lt;div&gt;Вы авторизованы под именем &lt;&quest;php<br/>
                                        echo &dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack;-&gt;user&lowbar;login&semi; &quest;&gt;<br/>
        &lt;&sol;div&gt;<br/>
        &lt;p style&equals;&quot;text-align&colon; center&semi;&quot;&gt;&lt;input type&equals;&quot;submit&quot; name&equals;&quot;logout&quot; class&equals;&quot;btn btn-primary&quot; value&equals;&quot;Выйти&quot; &sol;&gt;&lt;&sol;p&gt;<br/>
    &lt;&sol;form&gt;<br/>
&lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;custom&lowbar;logged&lowbar;form&lowbar;function&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;custom&lowbar;logout&lowbar;form&lowbar;function&lpar;&rpar;<br/>
&lbrace;<br/>
    if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;logout&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        if &lpar;isset&lpar;&dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
            &dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack; &equals; null&semi;<br/>
        &rbrace;<br/>
    &rbrace;<br/>
&rbrace;<br/>
<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;custom&lowbar;logout&lowbar;form&lowbar;function&apos;&rpar;&semi;<br/>
&sol;&sol; Функция для восстановления пароля<br/>
function custom&lowbar;password&lowbar;reset&lpar;&rpar;<br/>
&lbrace;<br/>
    if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;submit&lowbar;email&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        &sol;&sol; Проверка и санитация данных формы<br/>
        &dollar;email &equals; sanitize&lowbar;email&lpar;&dollar;&lowbar;POST&lbrack;&apos;email&apos;&rbrack;&rpar;&semi;<br/>
        &sol;&sol; Запрос к базе данных для поиска пользователя по email<br/>
        global &dollar;wpdb&semi;<br/>
        &dollar;table&lowbar;name &equals; &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&semi;<br/>
        &dollar;user &equals; &dollar;wpdb-&gt;get&lowbar;row&lpar;&dollar;wpdb-&gt;prepare&lpar;&quot;SELECT &ast; FROM &quot; &period; &dollar;table&lowbar;name &period; &quot; WHERE user&lowbar;email &equals; &percnt;s&quot;&comma; &dollar;email&rpar;&rpar;&semi;<br/>
        if &lpar;&dollar;user&rpar; &lbrace;<br/>
            &sol;&sol; Генерация токена<br/>
            &dollar;reset&lowbar;token &equals; wp&lowbar;generate&lowbar;password&lpar;20&comma; false&rpar;&semi;<br/>
            &sol;&sol; Обновление записи в базе данных<br/>
            &dollar;wpdb-&gt;update&lpar;<br/>
                &dollar;table&lowbar;name&comma;<br/>
                array&lpar;&apos;reset&lowbar;token&apos; &equals;&gt; &dollar;reset&lowbar;token&rpar;&comma;<br/>
                array&lpar;&apos;id&apos; &equals;&gt; &dollar;user-&gt;id&rpar;<br/>
            &rpar;&semi;<br/>
            &sol;&sol; Отправка письма со ссылкой для сброса пароля<br/>
            &dollar;to &equals; &dollar;email&semi;<br/>
            &dollar;subject &equals; &apos;Сброс пароля&apos;&semi;<br/>
            &dollar;message &equals; &quot;Ссылка для сброса пароля&colon; &quot; &period; site&lowbar;url&lpar;&rpar; &period; &quot;&sol;reset-password&quest;token&equals;&quot; &period; &dollar;reset&lowbar;token&semi;<br/>
            &dollar;headers &equals; &quot;MIME-Version&colon; 1&period;0&quot; &period; &quot;&bsol;r&bsol;n&quot;&semi;<br/>
            &dollar;headers &period;&equals; &quot;Content-type&colon;text&sol;html&semi;charset&equals;UTF-8&quot; &period; &quot;&bsol;r&bsol;n&quot;&semi;<br/>
<br/>
            &sol;&sol;mail&lpar;&dollar;to&comma; &dollar;subject&comma; &dollar;message&rpar;&semi;<br/>
            mail&lpar;&dollar;to&comma; &dollar;subject&comma; &dollar;message&rpar;&semi;<br/>
            &sol;&sol; Сообщение об успешной отправке письма<br/>
            echo &quot;Проверьте свою почту для сброса пароля&period;&quot;&semi;<br/>
        &rbrace; else &lbrace;<br/>
            echo &quot;Пользователь с таким email не найден&period;&quot;&semi;<br/>
        &rbrace;<br/>
    &rbrace;<br/>
&rbrace;<br/>
add&lowbar;action&lpar;&quot;init&quot;&comma; &quot;custom&lowbar;password&lowbar;reset&quot;&rpar;&semi;<br/>
<br/>
function custom&lowbar;user&lowbar;password&lowbar;reset&lowbar;form&lpar;&rpar;<br/>
&lbrace;<br/>
    &sol;&sol; Форма для ввода email<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
&quest;&gt;<br/>
    &lt;form method&equals;&quot;post&quot;&gt;<br/>
        &lt;input type&equals;&quot;email&quot; name&equals;&quot;email&quot; placeholder&equals;&quot;Введите ваш email&quot;&gt;<br/>
        &lt;button type&equals;&quot;submit&quot; name&equals;&quot;submit&lowbar;email&quot;&gt;Отправить&lt;&sol;button&gt;<br/>
    &lt;&sol;form&gt;<br/>
    &lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
add&lowbar;shortcode&lpar;&apos;custom&lowbar;password&lowbar;reset&apos;&comma; &apos;custom&lowbar;user&lowbar;password&lowbar;reset&lowbar;form&apos;&rpar;&semi;<br/>
<br/>
function custom&lowbar;reset&lowbar;password&lpar;&dollar;token&rpar;<br/>
&lbrace;<br/>
    global &dollar;wpdb&semi;<br/>
<br/>
    &sol;&sol; 1&period; Проверка валидности токена<br/>
    &dollar;token&lowbar;data &equals; &dollar;wpdb-&gt;get&lowbar;row&lpar;&dollar;wpdb-&gt;prepare&lpar;&quot;SELECT &ast; FROM &lbrace;&dollar;wpdb-&gt;prefix&rbrace;reg&lowbar;auto&lowbar;data WHERE token &equals; &percnt;s&quot;&comma; &dollar;token&rpar;&rpar;&semi;<br/>
<br/>
    if &lpar;&excl;&dollar;token&lowbar;data &vert;&vert; time&lpar;&rpar; &gt; &dollar;token&lowbar;data-&gt;expires&rpar; &lbrace;<br/>
        return new WP&lowbar;Error&lpar;&apos;invalid&lowbar;token&apos;&comma; &lowbar;&lowbar;&lpar;&apos;Токен недействителен или истек&apos;&comma; &apos;your-textdomain&apos;&rpar;&rpar;&semi;<br/>
    &rbrace;<br/>
<br/>
    &sol;&sol; 2&period; Получение ID пользователя<br/>
    &dollar;user&lowbar;id &equals; &dollar;token&lowbar;data-&gt;user&lowbar;id&semi;<br/>
<br/>
    &sol;&sol; 3&period; Проверка существования пользователя в кастомной таблице<br/>
    &dollar;user &equals; &dollar;wpdb-&gt;get&lowbar;row&lpar;&dollar;wpdb-&gt;prepare&lpar;&quot;SELECT &ast; FROM &lbrace;&dollar;wpdb-&gt;prefix&rbrace;reg&lowbar;auto&lowbar;data WHERE id &equals; &percnt;d&quot;&comma; &dollar;user&lowbar;id&rpar;&rpar;&semi;<br/>
<br/>
    if &lpar;&excl;&dollar;user&rpar; &lbrace;<br/>
        return new WP&lowbar;Error&lpar;&apos;user&lowbar;not&lowbar;found&apos;&comma; &lowbar;&lowbar;&lpar;&apos;Пользователь не найден&apos;&comma; &apos;your-textdomain&apos;&rpar;&rpar;&semi;<br/>
    &rbrace;<br/>
<br/>
    &sol;&sol; 4&period; Форма для ввода нового пароля<br/>
    if &lpar;is&lowbar;wp&lowbar;error&lpar;&dollar;user&rpar;&rpar; &lbrace;<br/>
        &sol;&sol; Вывод сообщения об ошибке<br/>
    &rbrace; else &lbrace;<br/>
    &quest;&gt;<br/>
        &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
            &lt;input type&equals;&quot;hidden&quot; name&equals;&quot;token&quot; value&equals;&quot;&lt;&quest;php echo esc&lowbar;attr&lpar;&dollar;token&rpar;&semi; &quest;&gt;&quot;&gt;<br/>
            &lt;label for&equals;&quot;password&quot;&gt;Новый пароль&colon;&lt;&sol;label&gt;<br/>
            &lt;input type&equals;&quot;password&quot; name&equals;&quot;password&quot; id&equals;&quot;password&quot; required&gt;<br/>
            &lt;input type&equals;&quot;submit&quot; name&equals;&quot;user&lowbar;password&quot; value&equals;&quot;Сменить пароль&quot;&gt;<br/>
        &lt;&sol;form&gt;<br/>
    &lt;&quest;php<br/>
    &rbrace;<br/>
<br/>
    &sol;&sol; 5&period; Обработка отправки формы<br/>
    if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&rpar;&amp;&amp;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;password&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        &dollar;new&lowbar;password &equals; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&rpar;&semi;<br/>
<br/>
        &sol;&sol; Хэширование нового пароля<br/>
        &dollar;hashed&lowbar;password &equals; wp&lowbar;hash&lowbar;password&lpar;&dollar;new&lowbar;password&rpar;&semi;<br/>
<br/>
        &sol;&sol; Обновление пароля в кастомной таблице<br/>
        &dollar;wpdb-&gt;update&lpar;<br/>
            &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&comma;<br/>
            array&lpar;&apos;user&lowbar;pass&apos; &equals;&gt; &dollar;hashed&lowbar;password&rpar;&comma;<br/>
            array&lpar;&apos;id&apos; &equals;&gt; &dollar;user&lowbar;id&rpar;<br/>
        &rpar;&semi;<br/>
<br/>
        &sol;&sol; Удаление токена<br/>
        &dollar;wpdb-&gt;delete&lpar;&dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&comma; array&lpar;&apos;token&apos; &equals;&gt; &dollar;token&rpar;&rpar;&semi;<br/>
<br/>
        &sol;&sol; Перенаправление на страницу успешной смены пароля<br/>
        wp&lowbar;redirect&lpar;home&lowbar;url&lpar;&apos;&sol;&apos;&rpar;&rpar;&semi;<br/>
        exit&semi;<br/>
    &rbrace;<br/>
&rbrace;<br/>
<br/>
add&lowbar;shortcode&lpar;&apos;custom&lowbar;reset&lowbar;password&apos;&comma; &apos;custom&lowbar;reset&lowbar;password&apos;&rpar;&semi;<br/>
&sol;&sol; Функция для создания формы<br/>
function my&lowbar;upload&lowbar;form&lpar;&rpar;<br/>
&lbrace;<br/>
    &quest;&gt;<br/>
    &lt;form action&equals;&quot;&quot; method&equals;&quot;post&quot; enctype&equals;&quot;multipart&sol;form-data&quot;&gt;<br/>
        Выберите изображение для загрузки&colon;<br/>
        &lt;input type&equals;&quot;file&quot; name&equals;&quot;fileToUpload&quot; id&equals;&quot;fileToUpload&quot;&gt;<br/>
        &lt;input type&equals;&quot;submit&quot; value&equals;&quot;Загрузить изображение&quot; name&equals;&quot;submit&lowbar;image&quot;&gt;<br/>
    &lt;&sol;form&gt;<br/>
<br/>
    &lt;script&gt;<br/>
        jQuery&lpar;document&rpar;&period;ready&lpar;function&lpar;&rpar; &lbrace;<br/>
            &sol;&sol; Создаем элемент img<br/>
            var img &equals; jQuery&lpar;&apos;&lt;img&gt;&apos;&rpar;&semi;<br/>
<br/>
            &sol;&sol; Устанавливаем путь к изображению<br/>
            img&period;attr&lpar;&apos;src&apos;&comma; &apos;&sol;wp-content&sol;plugins&sol;reg-auto&sol;includes&sol;uploads&sol;1&period;jpg&quest;&apos; &plus; Math&period;random&lpar;&rpar;&rpar;&semi;<br/>
            img&period;width&lpar;100&rpar;&semi;<br/>
            img&period;height&lpar;100&rpar;&semi;<br/>
            &sol;&sol; Добавляем изображение в элемент с id&equals;&quot;image-container&quot;<br/>
            jQuery&lpar;&apos;&num;image-container&apos;&rpar;&period;append&lpar;img&rpar;&semi;<br/>
        &rbrace;&rpar;&semi;<br/>
    &lt;&sol;script&gt;<br/>
&lt;&quest;php<br/>
&rbrace;<br/>
add&lowbar;shortcode&lpar;&apos;my&lowbar;upload&lowbar;form&apos;&comma; &apos;my&lowbar;upload&lowbar;form&apos;&rpar;&semi;<br/>
<br/>
&sol;&sol; Функция для обработки загрузки<br/>
function my&lowbar;upload&lowbar;action&lpar;&rpar;<br/>
&lbrace;<br/>
    if &lpar;&dollar;&lowbar;SERVER&lbrack;&apos;REQUEST&lowbar;METHOD&apos;&rbrack; &equals;&equals;&equals; &apos;POST&apos; &amp;&amp; isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;submit&lowbar;image&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        &sol;&sol; Получаем информацию о загруженном файле<br/>
        &dollar;target&lowbar;dir &equals; MY&lowbar;PLUGIN&lowbar;DIR &period; &quot;uploads&sol;&quot;&semi; &sol;&sol; Директория для сохранения файлов<br/>
        &dollar;target&lowbar;file &equals; &dollar;target&lowbar;dir &period; basename&lpar;&dollar;&lowbar;FILES&lbrack;&quot;fileToUpload&quot;&rbrack;&lbrack;&quot;name&quot;&rbrack;&rpar;&semi;<br/>
        &dollar;uploadOk &equals; 1&semi;<br/>
        &dollar;imageFileType &equals; strtolower&lpar;pathinfo&lpar;&dollar;target&lowbar;file&comma; PATHINFO&lowbar;EXTENSION&rpar;&rpar;&semi;<br/>
<br/>
<br/>
        &sol;&sol; Проверяем размер файла<br/>
        if &lpar;&dollar;&lowbar;FILES&lbrack;&quot;fileToUpload&quot;&rbrack;&lbrack;&quot;size&quot;&rbrack; &gt; 500000&rpar; &lbrace;<br/>
            echo &quot;Слишком большой файл&period;&quot;&semi;<br/>
            &dollar;uploadOk &equals; 0&semi;<br/>
        &rbrace;<br/>
        &sol;&sol; Проверяем формат файла<br/>
        if &lpar;<br/>
            &dollar;imageFileType &excl;&equals; &quot;jpg&quot; &amp;&amp; &dollar;imageFileType &excl;&equals; &quot;png&quot; &amp;&amp; &dollar;imageFileType &excl;&equals; &quot;jpeg&quot;<br/>
            &amp;&amp; &dollar;imageFileType &excl;&equals; &quot;gif&quot;<br/>
        &rpar; &lbrace;<br/>
            echo &quot;Разрешены только JPG&comma; JPEG&comma; PNG и GIF файлы&period;&quot;&semi;<br/>
            &dollar;uploadOk &equals; 0&semi;<br/>
        &rbrace;<br/>
        &sol;&sol; Проверяем&comma; был ли файл загружен без ошибок<br/>
        if &lpar;&dollar;uploadOk &equals;&equals; 0&rpar; &lbrace;<br/>
            echo &quot;Извините&comma; ваш файл не был загружен&period;&quot;&semi;<br/>
            &sol;&sol; Если всё в порядке&comma; загружаем файл<br/>
        &rbrace; else &lbrace;<br/>
            unlink&lpar;&lowbar;&lowbar;DIR&lowbar;&lowbar; &period; &apos;&sol;uploads&sol;1&period;jpg&apos;&rpar;&semi;<br/>
            if &lpar;move&lowbar;uploaded&lowbar;file&lpar;&dollar;&lowbar;FILES&lbrack;&quot;fileToUpload&quot;&rbrack;&lbrack;&quot;tmp&lowbar;name&quot;&rbrack;&comma; &lowbar;&lowbar;DIR&lowbar;&lowbar; &period; &apos;&sol;uploads&sol;1&period;jpg&apos;&rpar;&rpar; &lbrace;<br/>
                &sol;&sol;echo &quot;Файл &quot; &period; basename&lpar;&dollar;&lowbar;FILES&lbrack;&quot;fileToUpload&quot;&rbrack;&lbrack;&quot;name&quot;&rbrack;&rpar; &period; &quot; загружен&period;&quot;&semi;<br/>
                &sol;&sol; Выводим изображение<br/>
                &sol;&sol;echo &apos;&lt;img src&equals;&quot;&apos; &period; &dollar;target&lowbar;file &period; &apos;&quot; alt&equals;&quot;Загруженное изображение&quot;&gt;&apos;&semi;<br/>
            &rbrace; else &lbrace;<br/>
                echo &quot;Извините&comma; произошла ошибка при загрузке вашего файла&period;&quot;&semi;<br/>
            &rbrace;<br/>
        &rbrace;<br/>
    &rbrace;<br/>
&rbrace;<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;upload&lowbar;action&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;custom&lowbar;registration&lowbar;fields&lpar;&rpar;<br/>
&lbrace;<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
    global &dollar;wpdb&semi;<br/>
&quest;&gt;<br/>
    &lt;div class&equals;&quot;container&quot;&gt;<br/>
        &lt;div class&equals;&quot;row&quot;&gt;<br/>
            &lt;div class&equals;&quot;col-md-6&quot;&gt;<br/>
                &lt;div class&equals;&quot;image-container&quot; id&equals;&quot;image-container&quot;&gt;&lt;&sol;div&gt;<br/>
<br/>
                &lt;p&gt;&lt;&quest;php echo do&lowbar;shortcode&lpar;&apos;&lbrack;my&lowbar;upload&lowbar;form&rbrack;&apos;&rpar;&semi; &quest;&gt;&lt;&sol;p&gt;<br/>
            &lt;&sol;div&gt;<br/>
            &lt;div class&equals;&quot;col-md-6&quot;&gt;<br/>
                &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
                    &lt;div class&equals;&quot;wrap&quot;&gt;<br/>
                        &lt;div class&equals;&quot;mb-6&quot;&gt;<br/>
                        &lt;&sol;div&gt;<br/>
                        &lt;div class&equals;&quot;mb-6&quot;&gt;<br/>
                            &lt;p&gt;<br/>
                                &lt;label for&equals;&quot;user&lowbar;login&quot;&gt;Логин&colon;&lt;&sol;label&gt;<br/>
                                &lt;input type&equals;&quot;text&quot; name&equals;&quot;user&lowbar;login&quot; id&equals;&quot;user&lowbar;login&quot; class&equals;&quot;input&quot; value&equals;&quot;&lt;&quest;php if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;login&apos;&rbrack;&rpar;&rpar; echo esc&lowbar;attr&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;login&apos;&rbrack;&rpar;&semi; &quest;&gt;&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                            &lt;p&gt;<br/>
                                &lt;label for&equals;&quot;user&lowbar;name&quot;&gt;Имя&colon;&lt;&sol;label&gt;<br/>
                                &lt;input type&equals;&quot;text&quot; name&equals;&quot;user&lowbar;name&quot; id&equals;&quot;user&lowbar;name&quot; class&equals;&quot;input&quot; value&equals;&quot;&lt;&quest;php if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;name&apos;&rbrack;&rpar;&rpar; echo esc&lowbar;attr&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;name&apos;&rbrack;&rpar;&semi; &quest;&gt;&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                            &lt;p&gt;<br/>
                                &lt;label for&equals;&quot;email&quot;&gt;Email&colon;&lt;&sol;label&gt;<br/>
                                &lt;input type&equals;&quot;text&quot; name&equals;&quot;email&quot; id&equals;&quot;email&quot; class&equals;&quot;input&quot; value&equals;&quot;&lt;&quest;php if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;email&apos;&rbrack;&rpar;&rpar; echo esc&lowbar;attr&lpar;&dollar;&lowbar;POST&lbrack;&apos;email&apos;&rbrack;&rpar;&semi; &quest;&gt;&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                            &lt;p&gt;<br/>
                                &lt;label for&equals;&quot;password&quot;&gt;Пароль&colon;&lt;&sol;label&gt;<br/>
                                &lt;input type&equals;&quot;password&quot; name&equals;&quot;password&quot; id&equals;&quot;user&lowbar;pass&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                            &lt;p&gt;<br/>
                                &lt;label for&equals;&quot;password&lowbar;repeat&quot;&gt;Повторите пароль&colon;&lt;&sol;label&gt;<br/>
                                &lt;input type&equals;&quot;password&quot; name&equals;&quot;password&lowbar;repeat&quot; id&equals;&quot;user&lowbar;pass&lowbar;repeat&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                            &lt;p&gt;&lt;input type&equals;&quot;submit&quot; name&equals;&quot;register&quot; class&equals;&quot;btn btn-primary&quot; value&equals;&quot;Зарегистрироваться&quot; &sol;&gt;<br/>
                            &lt;&sol;p&gt;<br/>
                        &lt;&sol;div&gt;<br/>
                    &lt;&sol;div&gt;<br/>
                &lt;&sol;form&gt;<br/>
            &lt;&sol;div&gt;<br/>
        &lt;&sol;div&gt;<br/>
    &lt;&sol;div&gt;<br/>
&lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;custom&lowbar;registration&lowbar;fields&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;custom&lowbar;login&lowbar;fields&lpar;&rpar;<br/>
&lbrace;<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
&quest;&gt;<br/>
    &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
        &lt;p&gt;<br/>
            &lt;label for&equals;&quot;user&lowbar;login&quot;&gt;Логин&colon;&lt;&sol;label&gt;<br/>
            &lt;input type&equals;&quot;text&quot; name&equals;&quot;user&lowbar;login&quot; id&equals;&quot;user&lowbar;login&quot; class&equals;&quot;input&quot; value&equals;&quot;&lt;&quest;php if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;login&apos;&rbrack;&rpar;&rpar; echo esc&lowbar;attr&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;login&apos;&rbrack;&rpar;&semi; &quest;&gt;&quot; &sol;&gt;<br/>
        &lt;&sol;p&gt;<br/>
        &lt;p&gt;<br/>
            &lt;label for&equals;&quot;password&quot;&gt;Пароль&colon;&lt;&sol;label&gt;<br/>
            &lt;input type&equals;&quot;password&quot; name&equals;&quot;password&quot; id&equals;&quot;user&lowbar;pass&quot; &sol;&gt;<br/>
        &lt;&sol;p&gt;<br/>
        &lt;p&gt;<br/>
            &lt;input type&equals;&quot;checkbox&quot; name&equals;&quot;rememberme&quot; id&equals;&quot;rememberme&quot; value&equals;&quot;forever&quot; &sol;&gt;<br/>
            &lt;label for&equals;&quot;rememberme&quot;&gt;Запомнить меня&lt;&sol;label&gt;<br/>
        &lt;&sol;p&gt;<br/>
        &lt;p&gt;&lt;input type&equals;&quot;submit&quot; class&equals;&quot;btn btn-primary&quot; name&equals;&quot;login&quot; value&equals;&quot;Войти&quot; &sol;&gt;<br/>
<br/>
            &lt;&quest;php<br/>
            &dollar;page&lowbar;id &equals; 10&semi; &sol;&sol; ID страницы&comma; на которую нужно перейти<br/>
            &dollar;page&lowbar;link &equals; get&lowbar;permalink&lpar;&dollar;page&lowbar;id&rpar;&semi;<br/>
            &quest;&gt;<br/>
<br/>
            &lt;a href&equals;&quot;&lt;&quest;php echo esc&lowbar;url&lpar;&dollar;page&lowbar;link&rpar;&semi; &quest;&gt;&quot; class&equals;&quot;btn btn-secondary&quot;&gt;Зарегистрироваться&lt;&sol;a&gt;<br/>
        &lt;&sol;p&gt;<br/>
        &lt;&sol;&gt;<br/>
    &lt;&sol;form&gt;<br/>
&lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
&sol;&sol;add&lowbar;action&lpar;&apos;login&lowbar;form&apos;&comma; &apos;my&lowbar;custom&lowbar;login&lowbar;fields&apos;&rpar;&semi;<br/>
<br/>
function my&lowbar;custom&lowbar;registration&lowbar;process&lpar;&dollar;user&lowbar;id&rpar;<br/>
&lbrace;<br/>
    if &lpar;isset&lpar;&dollar;&lowbar;POST&lbrack;&apos;register&apos;&rbrack;&rpar;&rpar; &lbrace;<br/>
        global &dollar;wpdb&semi;<br/>
        &dollar;table&lowbar;name &equals; &dollar;wpdb-&gt;prefix &period; &apos;reg&lowbar;auto&lowbar;data&apos;&semi;<br/>
<br/>
        &sol;&sol; Проверяем и очищаем данные<br/>
        &dollar;username &equals; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;login&apos;&rbrack;&rpar;&semi;<br/>
        &dollar;name &equals; sanitize&lowbar;text&lowbar;field&lpar;&dollar;&lowbar;POST&lbrack;&apos;user&lowbar;name&apos;&rbrack;&rpar;&semi;<br/>
        &dollar;email &equals; sanitize&lowbar;email&lpar;&dollar;&lowbar;POST&lbrack;&apos;email&apos;&rbrack;&rpar;&semi;<br/>
        &dollar;password &equals; &dollar;&lowbar;POST&lbrack;&apos;password&apos;&rbrack;&semi;<br/>
        if &lpar;&dollar;password &excl;&equals; &dollar;&lowbar;POST&lbrack;&apos;password&lowbar;repeat&apos;&rbrack;&rpar; &lbrace;<br/>
            &dollar;errors &equals; new WP&lowbar;Error&lpar;&rpar;&semi;<br/>
            &dollar;errors-&gt;add&lpar;&apos;password&lowbar;mismatch&apos;&comma; &apos;Пароли не совпадают&period;&apos;&rpar;&semi;<br/>
            return &dollar;errors&semi;<br/>
        &rbrace; else &lbrace;<br/>
<br/>
            &sol;&sol; Проверка на существование пользователя<br/>
            &dollar;user &equals; &dollar;wpdb-&gt;get&lowbar;row&lpar;&quot;SELECT &ast; FROM &dollar;table&lowbar;name WHERE email &equals; &apos;&dollar;email&apos; OR login &equals; &apos;&dollar;username&apos;&quot;&rpar;&semi; &sol;&sol; &dollar;user &equals; get&lowbar;user&lowbar;by&lpar;&apos;email&apos;&comma; &dollar;email&rpar;&semi;<br/>
            if &lpar;&dollar;user&rpar; &lbrace;<br/>
                &sol;&sol; Пользователь с таким email уже существует<br/>
                wp&lowbar;die&lpar;&lowbar;&lowbar;&lpar;&apos;Пользователь с таким email или логином уже существует&period;&apos;&comma; &apos;my-plugin&apos;&rpar;&rpar;&semi;<br/>
            &rbrace;<br/>
<br/>
            &sol;&sol; &dollar;user &equals; get&lowbar;user&lowbar;by&lpar;&apos;login&apos;&comma; &dollar;username&rpar;&semi;<br/>
            &sol;&sol; if &lpar;&dollar;user&rpar; &lbrace;<br/>
            &sol;&sol;     &sol;&sol; Пользователь с таким email уже существует<br/>
            &sol;&sol;     wp&lowbar;die&lpar;&lowbar;&lowbar;&lpar;&apos;Пользователь с таким логином уже существует&period;&apos;&comma; &apos;my-plugin&apos;&rpar;&rpar;&semi;<br/>
            &sol;&sol; &rbrace;<br/>
<br/>
            &sol;&sol; Создание пользователя<br/>
            &sol;&sol; &dollar;user&lowbar;id &equals; wp&lowbar;create&lowbar;user&lpar;&dollar;username&comma; &dollar;password&comma; &dollar;email&rpar;&semi;<br/>
<br/>
            &sol;&sol; if &lpar;is&lowbar;wp&lowbar;error&lpar;&dollar;user&lowbar;id&rpar;&rpar; &lbrace;<br/>
            &sol;&sol;     &sol;&sol; Обработка ошибок при создании пользователя<br/>
            &sol;&sol;     wp&lowbar;die&lpar;&dollar;user&lowbar;id-&gt;get&lowbar;error&lowbar;message&lpar;&rpar;&rpar;&semi;<br/>
            &sol;&sol; &rbrace;<br/>
<br/>
            &dollar;data &equals; array&lpar;<br/>
                &apos;id&apos; &equals;&gt; &dollar;user&lowbar;id&comma;<br/>
                &apos;user&lowbar;login&apos; &equals;&gt; &dollar;username&comma;<br/>
                &apos;user&lowbar;email&apos; &equals;&gt; &dollar;email&comma;<br/>
                &apos;user&lowbar;pass&apos; &equals;&gt; wp&lowbar;hash&lowbar;password&lpar;<br/>
                    &dollar;password<br/>
                &rpar;&comma;<br/>
                &apos;name&apos; &equals;&gt; &dollar;name&comma;<br/>
                &apos;avatar&apos; &equals;&gt; &apos;&apos;<br/>
            &rpar;&semi;<br/>
<br/>
            &dollar;wpdb-&gt;insert&lpar;&dollar;table&lowbar;name&comma; &dollar;data&rpar;&semi;<br/>
            &dollar;userdata &equals; array&lpar;<br/>
                &apos;user&lowbar;login&apos; &equals;&gt; &dollar;username&comma;<br/>
                &apos;user&lowbar;pass&apos; &equals;&gt; &dollar;password&comma;<br/>
                &apos;user&lowbar;email&apos; &equals;&gt; &dollar;email&comma;<br/>
                &apos;name&apos; &equals;&gt; &dollar;name&comma;<br/>
            &rpar;&semi;<br/>
            wp&lowbar;insert&lowbar;user&lpar;wp&lowbar;slash&lpar;&dollar;userdata&rpar;&rpar;&semi;<br/>
            &sol;&sol; Отправка email-уведомления<br/>
            wp&lowbar;new&lowbar;user&lowbar;notification&lpar;&dollar;user&lowbar;id&rpar;&semi;<br/>
<br/>
            &dollar;page&lowbar;id &equals; 20&semi; &sol;&sol; ID страницы&comma; на которую нужно перейти<br/>
            &dollar;page&lowbar;link &equals; get&lowbar;permalink&lpar;&dollar;page&lowbar;id&rpar;&semi;<br/>
            wp&lowbar;redirect&lpar;&dollar;page&lowbar;link&rpar;&semi;<br/>
            exit&semi;<br/>
        &rbrace;<br/>
    &rbrace;<br/>
&rbrace;<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;my&lowbar;custom&lowbar;registration&lowbar;process&apos;&rpar;&semi;<br/>
<br/>
function custom&lowbar;login&lowbar;link&lpar;&rpar;<br/>
&lbrace;<br/>
    ob&lowbar;start&lpar;&rpar;&semi;<br/>
&quest;&gt;<br/>
    &lt;form method&equals;&quot;post&quot; action&equals;&quot;&quot;&gt;<br/>
        &lt;div&gt;Вы авторизованы под именем &lt;&quest;php<br/>
                                        echo &dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack;-&gt;user&lowbar;login&semi; &quest;&gt;<br/>
        &lt;&sol;div&gt;<br/>
        &lt;p style&equals;&quot;text-align&colon; center&semi;&quot;&gt;&lt;input type&equals;&quot;submit&quot; name&equals;&quot;logout&quot; class&equals;&quot;btn btn-secondary&quot; value&equals;&quot;Выйти&quot; &sol;&gt;&lt;&sol;p&gt;<br/>
    &lt;&sol;form&gt;<br/>
&lt;&quest;php<br/>
    return ob&lowbar;get&lowbar;clean&lpar;&rpar;&semi;<br/>
&rbrace;<br/>
<br/>
add&lowbar;action&lpar;&apos;init&apos;&comma; &apos;custom&lowbar;login&lowbar;link&apos;&rpar;&semi;<br/>
function custom&lowbar;logout&lowbar;link&lpar;&rpar;<br/>
&lbrace;<br/>
    if &lpar;&dollar;&lowbar;SESSION&lbrack;&apos;user&lowbar;data&apos;&rbrack;&rpar; &lbrace;<br/>
        echo &apos;&lt;a href&equals;&quot;&apos; &period; wp&lowbar;logout&lowbar;url&lpar;get&lowbar;permalink&lpar;&rpar;&rpar; &period; &apos;&quot;&gt;Выйти&lt;&sol;a&gt;&apos;&semi;<br/>
    &rbrace; else &lbrace;<br/>
        echo &apos;Вы не авторизованы&apos;&semi;<br/>
    &rbrace;<br/>
&rbrace;<br/>
<br/>
<br/>
&sol;&sol; Добавляем хук для вывода формы<br/>
add&lowbar;shortcode&lpar;&apos;my&lowbar;custom&lowbar;registration2&apos;&comma; &apos;my&lowbar;custom&lowbar;registration&lowbar;form&apos;&rpar;&semi;<br/>
<br/>
add&lowbar;shortcode&lpar;&apos;register&lowbar;form&apos;&comma; &apos;my&lowbar;custom&lowbar;registration&lowbar;fields&apos;&rpar;&semi;<br/>
<br/>
&sol;&sol; Создаем шорткод для вывода формы<br/>
add&lowbar;shortcode&lpar;&apos;login&lowbar;form&apos;&comma; &apos;my&lowbar;custom&lowbar;login&lowbar;form&lowbar;function&apos;&rpar;&semi;<br/>
add&lowbar;shortcode&lpar;&apos;logged&lowbar;form&apos;&comma; &apos;my&lowbar;custom&lowbar;logged&lowbar;form&lowbar;function&apos;&rpar;&semi;<br/>
<br/>
&sol;&sol;add&lowbar;shortcode&lpar;&apos;login&lowbar;form&apos;&comma; &apos;my&lowbar;custom&lowbar;login&lowbar;fields&apos;&rpar;&semi;<br/>
<br/>
add&lowbar;shortcode&lpar;&apos;my&lowbar;custom&lowbar;login&apos;&comma; &apos;my&lowbar;custom&lowbar;login&apos;&rpar;&semi;<br/>
<br/>
add&lowbar;shortcode&lpar;&apos;my&lowbar;custom&lowbar;lost&lowbar;password&apos;&comma; &apos;my&lowbar;custom&lowbar;lost&lowbar;password&apos;&rpar;&semi;<br/>
<br/>
add&lowbar;shortcode&lpar;&apos;custom&lowbar;logout&apos;&comma; &apos;custom&lowbar;logout&lowbar;link&apos;&rpar;&semi;<br/>
add&lowbar;shortcode&lpar;&apos;custom&lowbar;login&apos;&comma; &apos;custom&lowbar;login&lowbar;link&apos;&rpar;&semi;<br/>
<br/>
<br/>
<br/>
&quest;&gt;</code>
    </div>
  );
}
