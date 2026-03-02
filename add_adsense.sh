# Adicionar AdSense ao index.html
# Para adicionar: substitua "ca-pub-XXXXXXXXXXXXXXXX" pelo seu código real

ADSENSE_CODE="ca-pub-XXXXXXXXXXXXXXXX"

# Backup do arquivo original
cp index.html index.html.backup

# Código AdSense para <head>
ADSENSE_HEAD='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='$ADSENSE_CODE'" crossorigin="anonymous"></script>'

# Inserir AdSense no <head>
sed -i "/<\/title>/a $ADSENSE_HEAD" index.html

echo "✅ AdSense adicionado ao site!"
echo "📝 Backup criado: index.html.backup"
