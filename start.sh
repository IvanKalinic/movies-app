#!/bin/bash

cd backend
xterm -e npm run start &
cd ..

cd client
xterm -e npm run start &
cd ..

cd recommender_system
xterm -e ./start.sh &
cd ..
