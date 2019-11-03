

import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import heapq
import math
import json

schema = pd.read_csv('./O-Hack - Sheet1.csv')
schema = schema.set_index('Domains')
schema = schema.T
schema = schema.replace(np.nan,'none',regex=True)
Domains = list(schema.columns)
def create_schema():
    data_schema = {
        'Domain':Domains,
        'Sub Domain':{}
    }
    for domain in Domains:
        sub_domain = list(schema[domain].values)
        sub_domain = [ elem for elem in sub_domain if elem != 'none']
        domain_dict = data_schema['Sub Domain']
        if domain not in domain_dict:
            domain_dict[domain] = sub_domain
    return data_schema

data_schema = create_schema()
student_data = pd.read_csv('./student_info.csv')
interviewer_data = pd.read_csv('./interviewer_info.csv')
interviewer_data = interviewer_data.loc[:,['Name','Career Fields']]
student_data = student_data.loc[:,['Full Name','Career Interests for Matching']]                                
interviewer_data = interviewer_data.replace(np.nan,'',regex=True)
student_data = student_data.replace(np.nan,'',regex=True)
interviewer_names = list(interviewer_data['Name'])
student_names = list(student_data['Full Name'])
import random

data = {'ID':[],'Name':[],'Domains':[],'Sub_domains':[]}
df = pd.DataFrame(data)
df.Name = student_names
domains = []
sub_d = []
for i in range(len(df)):
    val = random.choice(data_schema['Domain'])
    domains.append(val)
    dictionary = data_schema['Sub Domain']
    domain_list = dictionary[val]
    num = random.choice(domain_list)
    sub_d.append(num)
df.Domains = domains
df.Sub_domains = sub_d
df.ID = list(range(100,100+len(student_names)))
df = df.set_index('ID')
data_sparse = pd.get_dummies(df, columns=['Domains','Sub_domains'])
data_sparse.drop(['Name'],axis=1,inplace=True)
from sklearn.model_selection import train_test_split
student_df, interview_df = train_test_split(data_sparse,test_size=0.2,random_state=10)

def get_rec(s_df, i_df,topn):

        item_factors = s_df.values
        i_vectors = i_df.values
        item_mappings = dict(zip(np.arange(s_df.shape[0]), s_df.index.values))
        item_mappings2 = dict(zip(np.arange(i_df.shape[0]), i_df.index.values))
        num = topn
        recoms = {}

        for i, item_factor in enumerate(item_factors):
            prod = item_factor.reshape(-1,1)
            pid = item_mappings[i]
            dist = cosine_similarity(i_vectors, prod.T )
            norms = np.sqrt( np.linalg.norm( i_vectors, axis=1 ).reshape( -1, 1 ) )
            dist = np.multiply( dist, norms ).reshape( -1 )
            close_idx = heapq.nlargest( num + 1, range( len( dist ) ), dist.take )
            close_pids = np.vectorize( item_mappings2.__getitem__ )( close_idx )
            #close_pids = close_pids[ (close_pids != pid) ]
            recoms[str(pid)] = list(close_pids)
            recommendations = list(recoms.values())
            #rec_list = [item for sublist in recommendations for item in sublist]
        return recoms 
recoms = get_rec(student_df, interview_df,len(interview_df))

def schedule_interview(recoms, event_duration):
    scheduler_list = []
    student_ls = list(recoms.keys())
    dir1 = {}
    for i in student_ls:
        dir1.update({(i):[]})

    dir2 = {}
    student_emps = list(recoms[student_ls[0]])
    for i in student_emps:
        dir2.update({int(i):[]})

    time_counter = math.floor(event_duration/25)
    student_ct = 0
    while(time_counter > 0):
        dict_inter = []
        for i in range(0,len(student_emps)):
            priority = recoms[student_ls[student_ct]]
            for p in priority:
                if p not in dict_inter:
                    if p not in dir1[student_ls[student_ct]]:
                        scheduler_list.append([student_ls[student_ct],int(p)])
                        dir1[student_ls[student_ct]].append(int(p))
                        dir2[int(p)].append(student_ls[student_ct])
                        dict_inter.append(p)
                        break
            if(student_ct < len(student_ls)-1):
                student_ct += 1
            else:
                student_ct = 0
        time_counter -= 1

    priority = recoms[student_ls[student_ct]]
    len(priority)*5
    
    return dir1,dir2

student_schedule, interviewer_schedule = schedule_interview(recoms, 240)
with open('student_schedule.json', 'w') as fp:
    json.dump(student_schedule, fp)
    
with open('interviewer_schedule.json', 'w') as fp:
    json.dump(interviewer_schedule, fp)