# METRO

Metr&ocirc;nomo musical/visual para acompanhamento de m&uacute;sicas e exerc&iacute;cios.

https://crisstanza.github.io/metro/

Configura&ccedil;&atilde;o Apache:

    /etc/apache2/httpd.conf

Alias:

    Alias /metro "/path-to/metro/"
    <Directory "/path-to/metro/">
        Require all granted
    </Directory>

Permiss&otilde;es

    chmod -R 755 ~/Documents/GitHub/

Restart:

    sudo apachectl -k restart
