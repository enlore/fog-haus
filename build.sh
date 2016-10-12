#! env bash
echo "Build started"
if [[ ! -f dist ]]; then
    mkdir dist
fi
cp -v src/*.js dist;
cp -vr lib/* dist;
stylus  --out dist src/main.styl;
pug -O data.json --pretty --out dist src/index.pug;
echo "Build done"
exit
