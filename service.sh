#!/bin/sh
# ps -ef | grep npm | grep -v grep | grep -v ps | awk '{print $2}'
# get pid
# nohup $JAVA $JAVA_OPTS $KEYWORD >> nohup.log 2>&1 & echo $! > $PID_FILE
# lsof -i:8080
case $1 in
  start)
    nohup npm start > access.log 2>&1 & echo $! > huahui.pid
    echo huahui.servier is running, pid=`cat ./huahui.pid`
    ;;
  stop)
    kill `cat ./huahui.pid`
    rm ./huahui.pid
    ;;
  restart)
    sh $0 stop
    sh $0 start
    ;;
  status)
    if [ -e ./huahui.pid ]; then
      echo huahui.servier is running, pid=`cat ./huahui.pid`
    else
      echo huahui.servier is NOT running
      exit 1
    fi
    ;;
  *)
    echo "$0 {start | stop | resatrt | status}"
    exit 4
    ;;
esac

exit 0
