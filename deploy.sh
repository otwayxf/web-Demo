### 
# @Author: Otway
 # @Date: 2019-08-16 21:42:16
 # @LastEditors: Otway
 # @LastEditTime: 2019-08-16 21:42:28
 # @copyright: h-visions
 ###
#!/bin/bash
# ouch！

inArray() {
  local ret=false
  local value=$1
  local arr=($2)

  if [ $# -lt 2 ]; then
    echo ${ret}
  elif [ ${#arr[@]} -eq 0 ]; then
    echo ${ret}
  else
    for current in ${arr[*]}
    do
      if [ "${value}" = "${current}" ]; then
        ret=true
        break
      fi
    done
    echo ${ret}
  fi
}

echo '----------------------';
echo '----- Here We Go -----';
echo '----------------------';

# default env
declare -a ENV_LIST=(
  'prod'
  'dev'
  'test'
  'demo'
  'demo-2'
)

PORT=

echo '请选择环境：'
select BUILD_ENV in 'prod' 'dev' 'test' 'demo' 'demo-2'; do
break;
done

if ! $(inArray "${BUILD_ENV}" "${ENV_LIST[*]}"); then
  echo 'Error: Invalid option.'
  exit -1;
fi

if [ $BUILD_ENV = 'dev' ]; then
  PORT='8033'
elif [ $BUILD_ENV = 'test' ]; then
  PORT='8011'
elif [ $BUILD_ENV = 'demo' ]; then
  PORT='8001'
fi

echo '-- 1. Stop Docker Container --';
sudo docker stop 'h-visions-frontend-'$BUILD_ENV

echo '-- 2. Git Pull --';
sudo git pull

echo '-- 3. Yarn Install --';
yarn install

echo '-- 4. Build Portal Center --'
# nvm use v9.10.0
yarn 'build:'$BUILD_ENV

echo '-- 5. Build Docker Image --'
read -p '请输入发布版本：' VISION
sudo docker build --rm -t 'h-visions-'$BUILD_ENV':v'$VISION .

echo '-- 6. Run Docker Container --'
read -p "请输入发布端口（${PORT}）：" PORT_INPUT
if ! [ -z "${PORT_INPUT}" ];then
  PORT=$PORT_INPUT
fi
sudo docker run --rm -d -p $PORT:80 --name 'h-visions-frontend-'$BUILD_ENV 'h-visions-'$BUILD_ENV':v'$VISION

echo '----- Done ----'
