g++ -O2 -c -fpic -std=c++11 math.cc
g++ -shared math.o -o math.so -std=c++11