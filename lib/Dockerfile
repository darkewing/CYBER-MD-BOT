FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/darkewing/CYBER-MD-BOT/root/darkewing
WORKDIR /root/darkewing/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
